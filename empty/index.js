var fs = require('fs');
var mkdirp = require('mkdirp');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

	/*-------> 定义模块名和子模块名 START <--------*/
	var conf = fs.readFileSync( __dirname+'/config.js', 'utf8' );
	var str = conf.toString();
	// var o = JSON.parse(s);
	var o = eval('('+str+')');

    this.module_name = o.module_name;
    this.submodule_name = o.submodule_name;
	
    /*-------> 定义模块名和子模块名 END <--------*/    
  },
  createJs: function(){

  	var dest = ['js', this.module_name, 'controllers'].join('/');
    var filename = [dest, this.submodule_name].join('/') + '.js';
    console.log(filename);
    // 创建路径文件夹
    mkdirp(dest);

    var data = {
    	'namespace': 'Test',
        'module_name': this.module_name,
        'module_description': 'test desc',
        'submodule_name': this.submodule_name,
        'submodule_description': '',
        'username': 'shenyuan.yue',
        'email': 'shenyuan.yue@qunar.com',
        'date': ''
    };
    // console.log(data);

    /*
     * copyTpl用来拷贝渲染好的模板文件的方法
     * 需要输入三个参数：模板源路径、需要拷贝到的项目路径、模板渲染内容对象。
     * 模板的渲染是基于ejs模板引擎的语法
     */
    this.fs.copyTpl(
        this.templatePath('service.js'), // 获取模板文件路径
        this.destinationPath(filename),  // 获取生成文件的绝对路径，destinationPath获取当前目录的绝对路径
        data
    );
  }
});