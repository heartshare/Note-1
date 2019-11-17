(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker命令记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker命令记录"}},[s._v("#")]),s._v(" Docker命令记录")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("命令手册:")]),s._v(" "),t("a",{attrs:{href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.runoob.com/docker/docker-command-manual.html"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 根据镜像Id创建容器，在使用-d参数时，新增容器启动后会进入后台\ndocker run --name mytomcat -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 474df972e59d\ndocker run --name mytomcat -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 474df972e59d\n// 启动，停止，重启，可以是Id或Name\ndocker stop aeb4a0e907f0\ndocker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("restart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" tomcat\n")])])]),t("h2",{attrs:{id:"exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[s._v("#")]),s._v(" Exec")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 进去容器\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 474df972e59d "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n// 退出当前容器\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),t("h2",{attrs:{id:"cp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[s._v("#")]),s._v(" Cp")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 我们直接用下面命令复制出来容器里ES的配置文件进行修改\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" es1:/usr/share/elasticsearch/config/elasticsearch.yml D:/Tools/docker\n// 再用下面命令复制回容器替换\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" D:/Tools/docker/elasticsearch.yml es1:/usr/share/elasticsearch/config/elasticsearch.yml\n")])])]),t("h2",{attrs:{id:"ps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[s._v("#")]),s._v(" Ps")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 显示所有的容器，包括未运行的\ndocker -a\n// 显示最近创建的容器\ndocker -l\n// 列出最近创建的n个容器\ndocker -n\n")])])]),t("h2",{attrs:{id:"rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[s._v("#")]),s._v(" Rm")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("删除前需要保证容器是停止的stop")]),s._v(" "),t("li",[s._v("需要注意删除镜像和容器的命令不一样")]),s._v(" "),t("li",[s._v("顺序需要先删除容器")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 容器\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ID\n// 镜像\ndocker rmi ID\n")])])]),t("h2",{attrs:{id:"logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[s._v("#")]),s._v(" Logs")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 实时查看docker容器名为user-uat的日志\ndocker logs -f user-uat\n// 实时查看docker容器名为user-uat的最后10行日志\ndocker logs -f -t --tail "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" user-uat\n// 查看指定时间后的日志，只显示最后100行\ndocker logs -f -t --since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08"')]),s._v(" --tail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" user-uat\n// 查看最近30分钟的日志\ndocker logs --since 30m user-uat\n// 查看某时间之后的日志\ndocker logs -t --since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" user-uat\n// 查看某时间段日志\ndocker logs -t --since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" --until "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-09T12:23:37"')]),s._v(" user-uat\n// 将错误日志写入文件\ndocker logs -f -t --since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-18"')]),s._v(" user-uat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" error "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" logs_error.txt\n")])])]),t("h2",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" Vim")]),s._v(" "),t("blockquote",[t("p",[s._v("在使用Docker容器时，有时候里边没有安装vim，敲vim命令时提示说：vim: command not found"),t("br"),s._v("\n这个时候就需要安装vim，可是当你敲"),t("strong",[s._v("apt-get install vim")]),s._v("命令时，提示："),t("br"),s._v("\nReading package lists… Done"),t("br"),s._v("\nBuilding dependency tree"),t("br"),s._v("\nReading state information… Done"),t("br"),s._v("\nE: Unable to locate package vim"),t("br"),s._v("\n这时候需要敲："),t("strong",[s._v("apt-get update")]),s._v("，这个命令的作用是：同步/etc/apt/sources.list和/etc/apt/sources.list.d中列出的源的索引，这样才能获取到最新的软件包"),t("br"),s._v("\n等更新完毕以后再敲命令："),t("strong",[s._v("apt-get install vim")]),s._v("命令即可")])])])}),[],!1,null,null,null);a.default=r.exports}}]);