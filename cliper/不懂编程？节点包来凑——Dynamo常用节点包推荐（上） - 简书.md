# 不懂编程？节点包来凑——Dynamo常用节点包推荐（上） - 简书
由于篇幅有限，本次文章我们分上、下两篇，来分享给大家。

Dynamo 作为一款辅助三维设计工具，他可以通过图形化的编程，帮我们解决很多在设计或者建模过程中遇到的小问题；同时他作为一款可视化编程软件，学起来也不太难，但是，很多时候，Dynamo 自带的那些节点并不能满足我们日常工作的需要，因为这些节点，也就涉及到 RevitAPI 的九牛一毛，所以会编程又显得尤为重要了。

但是，Dynamo 作为一款可视化编程工具，不就是为了解决我们不会敲代码的问题吗？所以呢，本次文章，我给大家分享一些节点包，用好这些节点包，相信在工作中，能够帮助你解决不少问题，同时还不需要你自己敲代码。

**一、Orchid——推荐指数 ★★★★★**

这个包最初，我是想要删除族参数的时候，在 GitHub 上找到的；里面有丰富的关于参数的节点，不论是项目参数、共享参数还是族参数，应有尽有，而且包内都是成套的节点，用起来特别顺手。

![](https://upload-images.jianshu.io/upload_images/11877803-1bc98ddb6a135e69.jpg)

image

用了一段时间以后，发现这个包里，有太多好用的节点了，简答举几个例子：

“DataStream.Await”，允许某段程序在指定节点之后再运行，我在处理 Excel 或者参数的时候，经常会用到这个节点：

![](https://upload-images.jianshu.io/upload_images/11877803-ac902441a37d47cc.jpg)

image

"Document.BackgroundOpen" 可以后台打开 Revit 文件，并且允许你分离中心文件，批量处理的时候，特别方便：

![](https://upload-images.jianshu.io/upload_images/11877803-b17b24b36618f3b2.jpg)

image

创建和添加共享参数也比自带的节点好用，可以判断当前项目是否用该共享参数，然后进行添加和更新。

![](https://upload-images.jianshu.io/upload_images/11877803-943db5bce698d4e9.jpg)

image

简单举两个例子，这个包很有潜能，多去翻翻节点，会有意外的收获哦~

**二、Data-Shape——推荐指数 ★★★★★**

如果你也想我一样，喜欢折腾，那么这个包特别适合你，这个包，可以在你完成你的程序以后，为它定制一个 UI，方便不会 Dynamo 的小伙伴使用。

![](https://upload-images.jianshu.io/upload_images/11877803-a0ac16929e4e04a8.jpg)

image

如上图，这样一个 UI 只需要 UI.MultipleInputForm ++ 配合几个输入端，就可以轻松实现：

![](https://upload-images.jianshu.io/upload_images/11877803-3499bdd15dd64ecf.jpg)

image

当然了，Data-Shape 还可以做各种的图表，可玩性很高，这里就不详述了：

![](https://upload-images.jianshu.io/upload_images/11877803-79c4c11373afced5.jpg)

image

**三、archi-lab——推荐指数 ★★★★★**

archilab 算是经典的节点包了，从用 Dynamo 开始，基本就一直在用，里面有各种节点，覆盖面特别广，打印 PDF、导入导入 Excel 和 CSV，可以说基本的常用节点，它都有几个，可以解决很多日常的问题。

![](https://upload-images.jianshu.io/upload_images/11877803-9373d92c6fffec76.jpg)

image

而且作者还有几个包，例如：archilab_Bumblebee 处理 Excel 用，Archil-lab_Mandrell 处理图表用，都是很方便的。

**四、BimorphNodes——推荐指数 ★★★★★**

对于经常处理 CAD 文件以及链接模型的小伙伴，这个包可以说是必备选项，里面包含了处理 CAD 曲线、文字等的一系列节点，而且使用很简单，学习成本很低。

同时，用这个包处理链接的 Revit 文件，也特别方便，基本是一套下来的，帮你获取链接模型的图元以及复制到当前文档等，完全满足你的日常需求。

![](https://upload-images.jianshu.io/upload_images/11877803-c1e16371d11121d6.jpg)

image

**五、LinkDWG&LinkDWG2——推荐指数 ★★★★★**

说起来，处理 CAD 文件，那么就不得不提 KOZ 的 LinkDWG 节点包，这里面的节点，都是完全针对 CAD 的，可以处理各种链接的 CAD 文件，就像是在 CAD 中使用一样，特别的好用。

![](https://upload-images.jianshu.io/upload_images/11877803-6bace7b680447b1e.jpg)

image

但是，这个节点包的学习成本也比较高，需要理解作者的开发思路才行，不然你很难拿起来就用。尤其是更新到 LinkDWG2 以后，操作逻辑和原来有很大的变化，有需求的小伙伴，可以关注知乎上的建筑师魔术手，里面有关于 LinkDWG 的介绍。

**六、Chynamo&ChynamoApp——推荐指数 ★★★★★**

同样是 K 神出品，这两个包也很实用，例如我很早以前写过的创建房间装饰面层，用的就是这个包。

![](https://upload-images.jianshu.io/upload_images/11877803-6a6f556ccbdf4665.jpg)

image

例如，Revit 地形文件的转换，都有现成的节点：

![](https://upload-images.jianshu.io/upload_images/11877803-4f2e9670a0a09824.jpg)

image

ChynamoApp 里有一系列，针对 Revit 建模的节点，例如创建轴网，编辑轴网编号，创建墙、楼板、房间等，很实用，值得推荐。

**七、LunchBox——推荐指数 ★★★★★**

用过 Grasshopper 的都知道这个节点包，在做幕墙网格划分的时候，特别方便，包里面内置了很多网格划分的形式：

![](https://upload-images.jianshu.io/upload_images/11877803-e9698656cb3509d5.jpg)

image

我们之前在讲幕墙的文章时候，用过这个节点包，这里就不在赘述了。

当然了，这个是 Revit 的包，里面还有很多与 Revit 交互的节点，就留给大家自己去发现吧~

**八、Clockwork——推荐指数 ★★★★★**

同样的，Clockwork 节点包，也是一个非常全面的节点包，里面包含了大量的节点，像图元的剪切和连接等，都有相应的节点：

![](https://upload-images.jianshu.io/upload_images/11877803-375b02a2a35992a7.jpg)

image

**九、Rhythm——推荐指数 ★★★★☆**

这个包也很常用，例如获取和设置图元的类型参数，都会用到这里面的节点：

![](https://upload-images.jianshu.io/upload_images/11877803-a7868670d55bec68.jpg)

image

**十、Spring——推荐指数 ★★★★☆**

Spring 也是一个比较全面的节点包，因为太全面了，也不好特殊介绍什么，大家多翻一翻，就明白了了，比较推荐。

好了，由于篇幅有限，本篇文章，我们先简单介绍了一些比较大众化的节点包，下一篇，会给大家推荐一些有针对性的节点包，当然，这只是我了解的一些节点包，小伙伴们有更好地节点包，也欢迎你留言分享哦~

**预告**

下篇介绍的节点包，主要有：Ampersand、DynaMaps、IГIS、Genius Loci、Ladybug、Modelical、NodeModelCharts、SXF_Bridge、Structural Design、MEPover、MeshToolkit 等，因为是小众一些的节点包，下次可能就会更简单的介绍一下哈~

好了，今天的分享就到这里了，主要是想给大家分享一些节点包，希望能帮助大家解决更多的实际问题，当然还需要大家自行尝试，有不对的地方，请指正哈！

BIM 的乐趣 “群成员已经过百了，有希望入群的小伙伴，可以加我好友，备注来源，我来拉你入群哦~ 
 [https://www.jianshu.com/p/65fdf23a400a](https://www.jianshu.com/p/65fdf23a400a)
