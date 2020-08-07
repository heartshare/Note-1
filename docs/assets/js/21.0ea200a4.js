(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{468:function(s,t,a){"use strict";a.r(t);var e=a(11),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh同时使用多个git账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh同时使用多个git账户"}},[s._v("#")]),s._v(" SSH同时使用多个Git账户")]),s._v(" "),a("p",[s._v("一台电脑上使用SSH同时连接多个Git账户")]),s._v(" "),a("h2",{attrs:{id:"_1-同时两个github账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-同时两个github账户"}},[s._v("#")]),s._v(" 1. 同时两个Github账户")]),s._v(" "),a("h3",{attrs:{id:"_1-1-建立ssh公私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-建立ssh公私钥"}},[s._v("#")]),s._v(" 1.1. 建立SSH公私钥")]),s._v(" "),a("blockquote",[a("p",[s._v("先打开"),a("strong",[s._v("Git Bash")]),s._v("窗口，输入命令，切换到对应目录"),a("strong",[s._v("C:\\Users\\随心\\.ssh")]),s._v("，随心是你电脑对应的用户名")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105005.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("执行命令，生成第一个账号的SSH")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1107224733@qq.com"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("不要一路回车，在第一个对话的时候输入公私钥重命名为"),a("strong",[s._v("id_rsa_dolyw")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105006.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("同理第二个也是这样")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"158020951@qq.com"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("在第一个对话的时候输入公私钥重命名为"),a("strong",[s._v("id_rsa_wliduo")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105007.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这里使用两个账号，以后只需按照这样继续添加账号即可，切换到对应目录"),a("strong",[s._v("C:\\Users\\随心\\.ssh，一个账号两个文件(私钥和公钥)")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Ps: 好像如果是Linux还需要添加一下私钥文件，Windows好像不用")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-建立配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-建立配置文件"}},[s._v("#")]),s._v(" 1.2. 建立配置文件")]),s._v(" "),a("blockquote",[a("p",[s._v("输入下面命令建立config文件")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" config\n")])])]),a("blockquote",[a("p",[s._v("打开文件输入下面代码")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),s._v(" dolyw\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostName")]),s._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" git\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdentityFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa_dolyw\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),s._v(" wliduo\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostName")]),s._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" git\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdentityFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa_wliduo\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105008.png",alt:"图片"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105009.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_1-3-登录配置公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-登录配置公钥"}},[s._v("#")]),s._v(" 1.3.登录配置公钥")]),s._v(" "),a("blockquote",[a("p",[s._v("登录"),a("strong",[s._v("Github")]),s._v("配置公钥，登录点击"),a("strong",[s._v("Settings")]),s._v("，"),a("strong",[s._v("SSH and GPG keys")]),s._v("，"),a("strong",[s._v("New SSH key")]),a("br"),s._v("\n打开对应账号的"),a("strong",[s._v("id_rsa_dolyw.pub")]),s._v("公钥文件，把内容复制到Key里")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105010.png",alt:"图片"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105011.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("添加成功，测试是否成功，打开窗口，输入命令")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T dolyw\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105012.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这样就成功了，wliduo账户一样的操作，登录"),a("strong",[s._v("Github")]),s._v("配置公钥")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105013.png",alt:"图片"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105014.png",alt:"图片"}})]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T wliduo\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105015.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("成功，可以使用两个账号"),a("strong",[s._v("Clone，Push")]),s._v("测试下")])]),s._v(" "),a("h2",{attrs:{id:"_2-添加码云-gitee-账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加码云-gitee-账户"}},[s._v("#")]),s._v(" 2. 添加码云(Gitee)账户")]),s._v(" "),a("h3",{attrs:{id:"_2-1-建立ssh公私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-建立ssh公私钥"}},[s._v("#")]),s._v(" 2.1. 建立SSH公私钥")]),s._v(" "),a("blockquote",[a("p",[s._v("先打开"),a("strong",[s._v("Git Bash")]),s._v("窗口，输入命令，切换到对应目录"),a("strong",[s._v("C:\\Users\\随心\\.ssh")]),s._v("，随心是你电脑对应的用户名")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n")])])]),a("blockquote",[a("p",[s._v("执行命令，生成第一个账号的SSH")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1107224733@qq.com"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("不要一路回车，在第一个对话的时候输入公私钥重命名为"),a("strong",[s._v("id_rsa_gitee")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105021.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改配置文件"}},[s._v("#")]),s._v(" 2.2. 修改配置文件")]),s._v(" "),a("blockquote",[a("p",[s._v("打开"),a("strong",[s._v("C:\\Users\\随心\\.ssh\\config")]),s._v("文件输入下面代码")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),s._v(" gitee\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostName")]),s._v(" gitee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" git\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdentityFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa_gitee\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105023.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_2-3-登录配置公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-登录配置公钥"}},[s._v("#")]),s._v(" 2.3. 登录配置公钥")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("去码云登录账号添加部署SSH公钥")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105022.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("添加成功，测试是否成功，打开窗口，输入命令")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T gitee\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105024.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这样就成功了")])]),s._v(" "),a("h2",{attrs:{id:"_3-添加coding账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加coding账户"}},[s._v("#")]),s._v(" 3. 添加Coding账户")]),s._v(" "),a("h3",{attrs:{id:"_3-1-建立ssh公私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-建立ssh公私钥"}},[s._v("#")]),s._v(" 3.1. 建立SSH公私钥")]),s._v(" "),a("blockquote",[a("p",[s._v("先打开"),a("strong",[s._v("Git Bash")]),s._v("窗口，输入命令，切换到对应目录"),a("strong",[s._v("C:\\Users\\随心\\.ssh")]),s._v("，随心是你电脑对应的用户名")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n")])])]),a("blockquote",[a("p",[s._v("执行命令，生成第一个账号的SSH")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1107224733@qq.com"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("不要一路回车，在第一个对话的时候输入公私钥重命名为"),a("strong",[s._v("id_rsa_coding")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191106001.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-修改配置文件"}},[s._v("#")]),s._v(" 3.2. 修改配置文件")]),s._v(" "),a("blockquote",[a("p",[s._v("打开"),a("strong",[s._v("C:\\Users\\随心\\.ssh\\config")]),s._v("文件输入下面代码")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),s._v(" coding\n# "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostName")]),s._v(" git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tencent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostName")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("coding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" git\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdentityFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa_coding\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191106002.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_3-3-登录配置公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-登录配置公钥"}},[s._v("#")]),s._v(" 3.3. 登录配置公钥")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("去Coding登录账号添加部署SSH公钥")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191106003.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("添加成功，测试是否成功，打开窗口，输入命令，输入yes确定")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T coding\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191106004.png",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这样就成功了")])]),s._v(" "),a("h2",{attrs:{id:"_4-地址使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-地址使用注意"}},[s._v("#")]),s._v(" 4. 地址使用注意")]),s._v(" "),a("blockquote",[a("p",[s._v("地址必须注意类似"),a("strong",[s._v("git@github.com:dolyw/ShiroJwt.git")]),s._v("，"),a("strong",[s._v("github.com")]),s._v("需要更换为配置中的"),a("strong",[s._v("host")]),a("br"),s._v("\n例如git@"),a("strong",[s._v("github.com")]),s._v(":dolyw/ShiroJwt.git需要修改为git@"),a("strong",[s._v("dolyw")]),s._v(":dolyw/ShiroJwt.git")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105016.png",alt:"图片"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105017.png",alt:"图片"}})]),s._v(" "),a("h2",{attrs:{id:"_5-账户使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-账户使用注意"}},[s._v("#")]),s._v(" 5. 账户使用注意")]),s._v(" "),a("blockquote",[a("p",[s._v("默认是全局的用户名和邮箱，如果不想使用全局的用户名和邮箱，记得给每个仓库设置局部的用户名和邮箱")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n")])])]),a("h2",{attrs:{id:"_6-工具使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-工具使用注意"}},[s._v("#")]),s._v(" 6. 工具使用注意")]),s._v(" "),a("h3",{attrs:{id:"_6-1-idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-idea"}},[s._v("#")]),s._v(" 6.1. IDEA")]),s._v(" "),a("p",[a("strong",[s._v("IDEA记得设置SSH认证为Native")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105018.png",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_6-2-tortoisegit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-tortoisegit"}},[s._v("#")]),s._v(" 6.2. TortoiseGit")]),s._v(" "),a("p",[a("strong",[s._v("TortoiseGit记得设置SSH认证为Git默认的")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105019.png",alt:"图片"}})]),s._v(" "),a("h2",{attrs:{id:"_7-修改https为ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-修改https为ssh"}},[s._v("#")]),s._v(" 7. 修改Https为SSH")]),s._v(" "),a("blockquote",[a("p",[s._v("也可以直接修改.git下的config文件")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191105020.png",alt:"图片"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);