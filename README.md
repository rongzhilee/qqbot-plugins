���  https://github.com/floatinghotpot/qqbot д��һЩ���

hubot��һ���ܲ�����뷨���Լ����ҵ������д��һ�²��
���������plugins �ļ����²����޸� config.yaml ���Ӳ������
plugins:
    - debug
    - apiserver
    - help2
    - brain
	
	
���� lib ��  /usr/lib/node_modules/smartqq-bot/ �ļ�����


ϣ��ԭ�������ṩͼƬ��api.

������������ɾ�� ~./tmp/*

������
npm install request
npm install redis


����֧���б�
list   #��ʾ֧�ֵ�����
top #��ʾ��ǰ������Ϣ
cmd ip/user@ip ����            #ִ������
top ip/user@ip         #��ʾָ��ip������Ϣ
study key value            #ѧϰ���������ӳ��
������䰴ѧϰ���ָ��������
����֮ǰ��Ҫ�ڱ�������һ��redis��
yum install redis
redis-server>redis.log &


����:
	top
	top 192.168.30.2
	cmd 192.168.30.2 tail /etc/passwd
	ѧϰ����˵�����£�
	study �ؼ��� ָ��
	study �б� ls /home/test
	study ��־ tail /var/log/messages
	study ���� ifconfig eth0
	
	�൱���Ժ�����ؼ���ֱ��ִ��ָ��
	��Ȼ��Ҳ�������������������
	study ���ɶ echo '����զ��'
	study �ٳ������� echo '����һʮ��'
	
	��λ�������з���
	
Ⱥ����������Ҫ��@��ͷִ������������
����:
	@help
	@cmd 192.168.30.2 ls /
