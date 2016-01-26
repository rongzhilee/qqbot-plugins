针对  https://github.com/floatinghotpot/qqbot 写的一些插件

hubot是一个很不错的想法，自己针对业务需求写了一下插件
将插件放在plugins 文件夹下并且修改 config.yaml 增加插件名称
plugins:
    - debug
    - apiserver
    - help2
    - brain
	
	
复制 lib 到  /usr/lib/node_modules/smartqq-bot/ 文件夹下


希望原作者能提供图片的api.

登入有问题请删除 ~./tmp/*

依赖库
npm install request
npm install redis


功能支持列表
list   #显示支持的主机
top #显示当前主机信息
cmd ip/user@ip 命令            #执行命令
top ip/user@ip         #显示指定ip主机信息
study key value            #学习相关于命令映射
其余语句按学习后的指令来处理，
在这之前需要在本机启动一个redis库
yum install redis
redis-server>redis.log &


例如:
	top
	top 192.168.30.2
	cmd 192.168.30.2 tail /etc/passwd
	学习功能说明如下：
	study 关键字 指令
	study 列表 ls /home/test
	study 日志 tail /var/log/messages
	study 网卡 ifconfig eth0
	
	相当于以后输入关键字直接执行指令
	当然，也可以用来做聊天机器人
	study 你瞅啥 echo '瞅你咋的'
	study 再瞅你试试 echo '四四一十六'
	
	各位可以自行发挥
	
群或讨论组需要用@开头执行命令否则忽略
例如:
	@help
	@cmd 192.168.30.2 ls /
