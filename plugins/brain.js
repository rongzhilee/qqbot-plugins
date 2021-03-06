// Generated by CoffeeScript 1.10.0
// 这个必须最后执行
// 在qq 目录下面 npm install redis
//  eg.	study 你个傻逼 echo '你才是'
//  eg.	study 你瞅啥 echo '瞅你咋地'
//  eg.	study 再瞅你试试 echo '四四一十六'

(function() {
  var redis   = require('redis');
  var process = require('child_process');
  var util = require(__dirname+'/../lib/util.js');

  /*
   @param content 消息内容
   @param send(content)  回复消息
   @param robot qqbot instance
   @param message 原消息对象
   */

  module.exports = function(content, send, robot, message) {
    
	//content = content.replace(/^\s\s*/, '')//针对qq群的一个bug，开头有空格
	//if(message && ( message.from_group || message.from_discuss )){
		//如果是组或者讨论组，需要使用#，否则禁言
		//if(content.charAt(0) == '@'){
			//content = content.substring(1);
		//}else{
			//return;
		//}
	//}
	content = util.formatContent(content,message);
	if(!content){
		return;
	}
	
	if (content.match(/^study\s+(.*)$/i)) {
	  var client  = redis.createClient('6379', '127.0.0.1');
	  
      
	  client.select('15', function(error){
		if(error) {
			send('err:'+error);
		} else {
			// set
			var array = content.split(/\s+/);
			var key1 = array[1];
			var value1 = array.splice(2).join(' ')
			  console.log('key='+key1+',value='+value1)
			  client.set(key1, value1, function(error, res) {
				if(error) {
					send('err:'+error);
				} else {
					send(res);
				}
				// 关闭链接
				client.end();
			});
		}
	});
    }
	if (content.match(/^remember$/i)) {
		var client  = redis.createClient('6379', '127.0.0.1');
		client.select('15', function(error){
			if(error) {
				send('err:'+error);
			} else {
				client.keys('*', function(error, value){
					if(error) {
						console.log('err:'+error);
					} else {
						console.log(value);
						send(util.maxLength(value))
					}
					// 关闭链接
					client.end();
				});
			}
		});
    }
	if (content.match(/^remember\s+(.+)$/i)) {
		var client  = redis.createClient('6379', '127.0.0.1');
		var array = content.split(/\s+/);//只有第一个可能是关键字
        var key = array[1];
		client.select('15', function(error){
			if(error) {
				send('err:'+error);
			} else {
				client.get(key, function(error, value){
					if(error) {
						console.log('err:'+error);
					} else {
					   if(value){
							send(util.maxLength(key+" "+value))
					   }else{
							send("没发现和"+key+"相关的逻辑")
					   }
					}
					// 关闭链接
					client.end();
				});
			}
		});
    }
	if (content.match(/^forget\s+(.+)$/i)) {
		var client  = redis.createClient('6379', '127.0.0.1');
		var array = content.split(/\s+/);//只有第一个可能是关键字
        var key = array[1];
		client.select('15', function(error){
			if(error) {
				send('err:'+error);
			} else {
				client.del(key, function(error, value){
					if(error) {
						console.log('err:'+error);
					} else {
					   if(value){
						   send('OK')
					   }else{
						   send('NOT FOUND')
					   }
					   
					}
					// 关闭链接
					client.end();
				});
			}
		});
    }
	// 这个必须最后执行
	if (content.match(/^(?!help|list|top|cmd|remember|forget).*/i)) {
	  var client  = redis.createClient('6379', '127.0.0.1');
	  
	  var array = content.split(/\s+/);//只有第一个可能是关键字
      var key = array[0];
		client.select('15', function(error){
		if(error) {
			send('err:'+error);
		} else {
			// get
			client.get(key, function(error, value){
				if(error) {
					console.log('err:'+error);
				} else {
					  if(value){
						  console.log(value);
						  cmd=value;
						  process.exec(cmd,function(err,stdout,stderr){
								if(err){
									send(util.maxLength(stderr));
								}else{
									send(util.maxLength(stdout));
								}
						  });
					  }else{
						send("不知道 "+key+" 啥意思，试试study教教我。")
					  }
					  
				}
				// 关闭链接
				client.end();
			});
		}
		});
    }
  };

}).call(this);