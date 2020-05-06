(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{280:function(a,t,_){"use strict";_.r(t);var v=_(0),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"java拾遗-虚拟机-jvm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java拾遗-虚拟机-jvm"}},[a._v("#")]),a._v(" Java拾遗-虚拟机(JVM)")]),a._v(" "),_("h2",{attrs:{id:"_1-什么是垃圾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是垃圾"}},[a._v("#")]),a._v(" 1. 什么是垃圾")]),a._v(" "),_("p",[a._v("在开始介绍垃圾之前，我们先复习一下手动内存管理。它是指你需要明确的为你的数据手动分配需要的空闲内存，但是如果用完后忘了回收掉这些内存，则之后也无法再次使用这部分内存。也就是说，这部分内存是属于被申明但未被继续使用。这种情况称为一个"),_("strong",[a._v("Memory Leak(内存泄漏)")])]),a._v(" "),_("p",[a._v("忘记回收内存可能是一件相当常见的事情。"),_("strong",[a._v("Memory Leak(内存泄漏)"),_("strong",[a._v("在过去也是一个较为常见的问题，而且仅能通过修改代码才能完全解决此问题。所以，一个更好的方法是自动回收未被用的内存，减少人本身可能犯错的可能性。这种自动的机制就是")]),a._v("垃圾回收(GC)")])]),a._v(" "),_("p",[a._v("简单说垃圾就是不在使用的，放着占用内存空间的对象，如放在工位的矿泉水空瓶等等，放到 JVM 中也就是在内存中已经不在使用的对象，这些无用的对象就是垃圾(没有任何引用指向的一个对象或者多个对象)，那么怎么判断这些对象是垃圾呢？JVM 提供了两种算法来识别垃圾")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("引用计数器")])]),a._v(" "),_("li",[_("strong",[a._v("GC Roots可达性分析(根可达)")])])]),a._v(" "),_("h3",{attrs:{id:"_1-1-引用计数器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引用计数器"}},[a._v("#")]),a._v(" 1.1. 引用计数器")]),a._v(" "),_("p",[a._v("给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加 1，当引用失效，计数器就减 1，任何时候计数器为 0 的对象就是不可能再被使用的")]),a._v(" "),_("p",[a._v("这个方法实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题")]),a._v(" "),_("h3",{attrs:{id:"_1-2-gc-roots可达性分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-gc-roots可达性分析"}},[a._v("#")]),a._v(" 1.2. GC Roots可达性分析")]),a._v(" "),_("p",[a._v("这个算法的基本思想就是通过一系列的称为 "),_("strong",[a._v("GC Root")]),a._v(" 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 "),_("strong",[a._v("GC Roots")]),a._v(" 没有任何引用链相连的话，则证明此对象是不可用的")]),a._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[a._v("不可达的对象并非非死不可")]),a._v(" "),_("p",[a._v("即使在可达性分析法中不可达的对象，也并非是"),_("strong",[a._v("非死不可")]),a._v("的，这时候它们暂时处于"),_("strong",[a._v("缓刑阶段")]),a._v("，要真正宣告一个对象死亡，至少要经历两次标记过程，可达性分析法中不可达的对象被第一次标记并且进行一次筛选，筛选的条件是此对象是否有必要执行 finalize 方法。当对象没有覆盖 finalize 方法，或 finalize 方法已经被虚拟机调用过时，虚拟机将这两种情况视为没有必要执行，被判定为需要执行的对象将会被放在一个队列中进行第二次标记，除非这个对象与引用链上的任何一个对象建立关联，否则就会被真的回收")])]),a._v(" "),_("h2",{attrs:{id:"_2-垃圾回收算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-垃圾回收算法"}},[a._v("#")]),a._v(" 2. 垃圾回收算法")]),a._v(" "),_("p",[a._v("一般都是标记清除(Mark Sweep)，复制(Copying)，标记压缩(Mark Compact)这三种")]),a._v(" "),_("h3",{attrs:{id:"_2-1-标记清除-mark-sweep"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-标记清除-mark-sweep"}},[a._v("#")]),a._v(" 2.1. 标记清除(Mark Sweep)")]),a._v(" "),_("p",[a._v("位置不连续，产生碎片，效率偏低(两遍扫描)")]),a._v(" "),_("h3",{attrs:{id:"_2-2-复制-copying"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-复制-copying"}},[a._v("#")]),a._v(" 2.2. 复制(Copying)")]),a._v(" "),_("p",[a._v("没有碎片，浪费空间")]),a._v(" "),_("h3",{attrs:{id:"_2-3-标记压缩-mark-compact"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-标记压缩-mark-compact"}},[a._v("#")]),a._v(" 2.3. 标记压缩(Mark Compact)")]),a._v(" "),_("p",[a._v("没有碎片，效率偏低(两遍扫描，指针需要调整)")]),a._v(" "),_("h2",{attrs:{id:"_3-jvm内存分代模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-jvm内存分代模型"}},[a._v("#")]),a._v(" 3. JVM内存分代模型")]),a._v(" "),_("blockquote",[_("p",[a._v("除Epsilon ZGC Shenandoah之外的GC都是使用逻辑分代模型，G1是逻辑分代，物理不分代，除此之外不仅逻辑分代，而且物理分代")])]),a._v(" "),_("p",[a._v("用于分代垃圾回收算法")]),a._v(" "),_("p",[a._v("待补充")]),a._v(" "),_("h2",{attrs:{id:"_4-垃圾回收器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-垃圾回收器"}},[a._v("#")]),a._v(" 4. 垃圾回收器")]),a._v(" "),_("p",[a._v("待补充")]),a._v(" "),_("h2",{attrs:{id:"_5-jvm调优"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-jvm调优"}},[a._v("#")]),a._v(" 5. JVM调优")]),a._v(" "),_("p",[a._v("待补充")])])}),[],!1,null,null,null);t.default=s.exports}}]);