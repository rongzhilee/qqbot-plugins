cpuload=`cat /proc/loadavg | awk '{print $1,$2,$3}'`

men_use=`free -m | sed -n '2p' | awk '{print $3"M"}'`
men_total=`free -m | sed -n '2p' | awk '{print $2"M"}'`
men_percent=`free -m | sed -n '2p' | awk '{print $3/$2*100}'`


disk_percent=`df -k |grep "/dev/sda"| grep -v Filesystem| awk '{print int($5)}'`



eth="eth0"

rx1=`cat /proc/net/dev|grep $eth|awk '{print $1}'|cut -d ':' -f 2`
tx1=`cat /proc/net/dev|grep $eth|awk '{print $9}'`
sleep 5
rx2=`cat /proc/net/dev|grep $eth|awk '{print $1}'|cut -d ':' -f 2`
tx2=`cat /proc/net/dev|grep $eth|awk '{print $9}'`
###Mb=B*8/1024/1024
let speed_RX=($rx2-$rx1)*8/10
let speed_TX=($tx2-$tx1)*8/10
###IN: $speed_RX Mb/s OUT: $speed_TX Mb/s

echo "统计信息为:cpu负载(1,5,15):$cpuload,内存使用:$men_use,内存总量$men_total,内存使用率:$men_percent%,硬盘使用率(sda):$disk_percent%,网卡流量(eth0):IN:$speed_RX byte/s OUT: $speed_TX byte/s"
