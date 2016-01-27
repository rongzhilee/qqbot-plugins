//用于qqbot plugin的工具类
//rongzhilee 20160127
exports.trimStr = function(str) {
    return str.replace(/(^\s*)|(\s*$)/g,"");
};
exports.formatContent = function(content,message) {
	var content = content.replace(/(^\s*)|(\s*$)/g,"");
	if(message && ( message.from_group || message.from_discuss )){
		if(content.charAt(0) == '@'){
			content = content.substring(1);
			return content;
		}else{
			return "";
		}
	}else{
		return content;
	}
};
exports.maxLength = function(text) {
	if(text && text.length > 500){
		return text.substring(0,500)+"..."
	}else{
		return text;
	}
}; 