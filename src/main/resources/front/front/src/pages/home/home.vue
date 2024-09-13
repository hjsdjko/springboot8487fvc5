<template>
<div class="home-preview" :style='{"width":"100%","margin":"0 auto","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
	<el-row type="flex" :gutter="5" justify="center" style="width: 100%">
		<el-col :span="3" v-if="queryList.length>1">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-input v-model="tiyuyongpinshangpinmingcheng" placeholder="商品名称"></el-input>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-button type="primary" @click="search('tiyuyongpin')">搜索</el-button>
		</el-col>
	</el-row>


	<!-- 关于我们 -->
	<div :style='{"minHeight":"600px","padding":"80px 7% 120px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0 0 60px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230130/cea0f80d9df244b8b07db0052d4191a2.png) no-repeat center bottom,url(http://codegen.caihongy.cn/20230130/d2e10e7dcbff48d3895e011f73f46f77.png) no-repeat right bottom / auto 100%,#f7fbfc","display":"block","width":"100%","position":"relative","height":"auto"}'>
	  <div :style='{"width":"48%","fontSize":"32px","color":"#000","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230130/8b9d126cfee848c48e05750bd3e8461d.png) no-repeat right center / 60% auto"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"width":"48%","margin":"0 0 20px","fontSize":"24px","color":"#555","textAlign":"left"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0","margin":"60px 0 0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"48%","float":"right","height":"220px"}'>
	    <img :style='{"margin":"0 10px","objectFit":"cover","borderRadius":"8px","flex":1,"display":"block","width":"48%","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0","objectFit":"cover","borderRadius":"8px","flex":1,"display":"block","width":"48%","height":"100%"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px","boxShadow":"0 10px 12px -10px #999","margin":"10px 0","color":"#666","borderRadius":"8px","background":"#fff","width":"48%","lineHeight":"24px","fontSize":"14px","float":"left","textIndent":"2em","height":"360px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="recommend" :style='{"margin":"20px auto 0","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230130/d81fd2d44f4e475eb1c571b1f64e5fae.png) no-repeat center top","display":"flex","width":"100%","position":"relative","justifyContent":"center"}'>
	
    <div class="title" :style='{"margin":"50px 7% 80px","alignItems":"flex-start","textAlign":"center","background":"none","display":"flex","width":"50%","position":"relative","justifyContent":"center","height":"76px"}'>
		<span :style='{"margin":"0 10px 0 0","fontSize":"32px","color":"#202020","textAlign":"center","fontWeight":"600"}'>体育用品推荐</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div class="list list4 index-pv1" :style='{"width":"100%","padding":"20px 7% 40px","background":"none","height":"auto"}'>
		<div v-if="tiyuyongpinRecommend.length>0" class="list-item animation-box" @click="toDetail('tiyuyongpinDetail', tiyuyongpinRecommend[0])" :style='{"width":"48%","margin":"0","position":"relative","float":"right","height":"570px"}'>
			<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(tiyuyongpinRecommend[0].fengmian)" :src="tiyuyongpinRecommend[0].fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (tiyuyongpinRecommend[0].fengmian?tiyuyongpinRecommend[0].fengmian.split(',')[0]:'')" alt="" />
			<div class="title line1" :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#fff","left":"0","textAlign":"center","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","lineHeight":"32px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                <div>{{tiyuyongpinRecommend[0].shangpinmingcheng}}</div>
                <div>{{tiyuyongpinRecommend[0].pinpai}}</div>
            </div>
		</div>
		<div class="list-body" :style='{"width":"48%","margin":"0 0 10px","float":"left","justifyContent":"space-between","display":"flex","height":"275px"}'>
			<div v-if="tiyuyongpinRecommend.length>1" @click="toDetail('tiyuyongpinDetail', tiyuyongpinRecommend[1])" class="list-item animation-box" :style='{"width":"48%","margin":"0","position":"relative","display":"inline-block","height":"100%"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(tiyuyongpinRecommend[1].fengmian)" :src="tiyuyongpinRecommend[1].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (tiyuyongpinRecommend[1].fengmian?tiyuyongpinRecommend[1].fengmian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#fff","left":"0","textAlign":"center","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","lineHeight":"32px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{tiyuyongpinRecommend[1].shangpinmingcheng}}</div>
                    <div>{{tiyuyongpinRecommend[1].pinpai}}</div>
                </div>
			</div>
			<div v-if="tiyuyongpinRecommend.length>2" @click="toDetail('tiyuyongpinDetail', tiyuyongpinRecommend[2])" class="list-item animation-box" :style='{"width":"48%","margin":"0","position":"relative","display":"inline-block","height":"100%"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(tiyuyongpinRecommend[2].fengmian)" :src="tiyuyongpinRecommend[2].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (tiyuyongpinRecommend[2].fengmian?tiyuyongpinRecommend[2].fengmian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#fff","left":"0","textAlign":"center","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","lineHeight":"32px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{tiyuyongpinRecommend[2].shangpinmingcheng}}</div>
                    <div>{{tiyuyongpinRecommend[2].pinpai}}</div>
                </div>
			</div>
		</div>
		<div class="list-body" :style='{"width":"48%","margin":"10px 0 0","float":"left","justifyContent":"space-between","display":"flex","height":"275px"}'>
			<div v-if="tiyuyongpinRecommend.length>3" @click="toDetail('tiyuyongpinDetail', tiyuyongpinRecommend[3])" class="list-item animation-box" :style='{"width":"48%","margin":"0","position":"relative","display":"inline-block","height":"100%"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(tiyuyongpinRecommend[3].fengmian)" :src="tiyuyongpinRecommend[3].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (tiyuyongpinRecommend[3].fengmian?tiyuyongpinRecommend[3].fengmian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#fff","left":"0","textAlign":"center","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","lineHeight":"32px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{tiyuyongpinRecommend[3].shangpinmingcheng}}</div>
                    <div>{{tiyuyongpinRecommend[3].pinpai}}</div>
                </div>
			</div>
			<div v-if="tiyuyongpinRecommend.length>4" @click="toDetail('tiyuyongpinDetail', tiyuyongpinRecommend[4])" class="list-item animation-box" :style='{"width":"48%","margin":"0","position":"relative","display":"inline-block","height":"100%"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(tiyuyongpinRecommend[4].fengmian)" :src="tiyuyongpinRecommend[4].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (tiyuyongpinRecommend[4].fengmian?tiyuyongpinRecommend[4].fengmian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#fff","left":"0","textAlign":"center","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","lineHeight":"32px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{tiyuyongpinRecommend[4].shangpinmingcheng}}</div>
                    <div>{{tiyuyongpinRecommend[4].pinpai}}</div>
                </div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	<div @click="moreBtn('tiyuyongpin')" :style='{"border":"0","padding":"0 12px 0 20px","margin":"o auto","borderRadius":"30px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230130/900bb2bf212e4ef8a599ed8502aa2b9d.png) no-repeat 90% center,linear-gradient(90deg, rgba(151,36,152,1) 0%, rgba(32,173,158,1) 100%),#20ad9e","display":"inline-block","width":"80px","lineHeight":"44px","minWidth":"200px","height":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px","display":"none"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="true" class="idea recommendIdea" :style='{"padding":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230130/aacb0fbd36e642799c61ce8641b160ed.jpg) no-repeat center top / 100% auto","display":"flex","width":"100%","justifyContent":"space-between","height":"600px"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>



<div class="lists" :style='{"padding":"40px 7% 100px","margin":"0 auto","textAlign":"center","background":"#f4f4f4","display":"block","width":"100%","position":"relative"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"20px auto 40px","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20230130/2d385bca38bb476596d3946973a96593.png) no-repeat center bottom","display":"flex","width":"auto","position":"relative","justifyContent":"center"}'>
	  <span :style='{"fontSize":"32px","color":"#202020","fontWeight":"bold","height":"76px"}'>体育用品展示</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div class="swiper-container" id="liststiyuyongpin" :style='{"width":"100%","padding":"100px 40px","borderRadius":"16px","background":"linear-gradient(90deg, rgba(151,36,152,1) 0%, rgba(32,173,158,1) 100%)","height":"auto"}'>
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","fontSize":"0","position":"relative","borderRadius":"4px","background":"none"}' v-for="(item,index) in tiyuyongpinList" :key="index" @click="toDetail('tiyuyongpinDetail', item)">
					<img :name="item.id" :style='{"border":"0","padding":"20px","margin":"0 0 10px","objectFit":"contain","background":"url(http://codegen.caihongy.cn/20230130/d254b3d5ad3f44648d9c986526c6f303.png) no-repeat center top / 100% 100%","width":"calc(100% - 20px)","height":"250px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","padding":"20px","margin":"0 0 10px","objectFit":"contain","background":"url(http://codegen.caihongy.cn/20230130/d254b3d5ad3f44648d9c986526c6f303.png) no-repeat center top / 100% 100%","width":"calc(100% - 20px)","height":"250px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
					<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto 10px","color":"#333","borderRadius":"20px","background":"linear-gradient(0deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","width":"90%","fontSize":"14px","lineHeight":"40px"}'>{{item.shangpinmingcheng}}</div>
					<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto 10px","color":"#333","borderRadius":"20px","background":"linear-gradient(0deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","width":"90%","fontSize":"14px","lineHeight":"40px"}'>{{item.pinpai}}</div>
            </div>
        </div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('tiyuyongpin')" :style='{"border":"0","margin":"0 0 0 -100px","borderRadius":"30px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230130/900bb2bf212e4ef8a599ed8502aa2b9d.png) no-repeat 90% center,#20ad9e","bottom":"80px","display":"inline-block","width":"auto","lineHeight":"44px","minWidth":"200px","position":"absolute","zIndex":"99"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px","display":"none"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>

	<!-- 系统简介 -->
	<div :style='{"border":"0 solid #20ad9e","padding":"0 7% 0 0","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"44px 0 20px 7%","flexWrap":"wrap","background":"none","borderWidth":"0 4px 0 0","display":"block","width":"23%","height":"auto"}'>
	  <div :style='{"color":"#333","textAlign":"left","width":"100%","lineHeight":"48px","fontSize":"32px","fontWeight":"600","height":"48px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0","color":"#333","textAlign":"left","width":"100%","lineHeight":"24px","fontSize":"24px","textTransform":"uppercase"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","display":"none","height":"auto"}'>
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px 20px 20px 24px","margin":"30px auto 0","overflow":"hidden","color":"#333","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230131/9543629579404f72953c320de179d045.png) no-repeat center top / 100% 100%","width":"100%","lineHeight":"24px","fontSize":"14px","textIndent":"2em","height":"352px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"width":"56%","margin":"0 7%","position":"relative","flexWrap":"wrap","background":"none","display":"flex"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"30px auto 20px","alignItems":"center","textAlign":"center","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"flex-start","height":"50px"}'>
		<span :style='{"fontSize":"32px","lineHeight":"60px","color":"#202020","fontWeight":"bold","height":"60px"}'>活动公告</span>
	</div>
	
	
	
	
	
	
	
	
	
	<!-- 样式八 -->
	<div v-if="newsList.length" class="list list8 index-pv1" :style='{"width":"100%","padding":"0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
	  <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" :style='{"padding":"10px","margin":"0 0 20px","flexWrap":"wrap","background":"linear-gradient(45deg, rgba(32,173,158,1) 0%, rgba(93,197,186,1) 15%, rgba(206,242,239,1) 50%, rgba(194,238,234,1) 75%, rgba(32,173,158,1) 100%),#20ad9e","display":"none","width":"100%","justifyContent":"space-between","height":"auto"}' class="list-item animation-box">
	    <div :style='{"width":"calc(100% - 210px)","padding":"10px","background":"#fff","height":"auto"}'>
	      <div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#333","fontSize":"14px","lineHeight":"28px","textOverflow":"ellipsis","fontWeight":"600"}'>{{newsList[0].title}}</div>
	      <div :style='{"fontSize":"14px","lineHeight":"24px","overflow":"hidden","color":"#666","textIndent":"2em","height":"72px"}'>{{newsList[0].introduction}}</div>
	      <div :style='{"fontSize":"12px","lineHeight":"24px","color":"#999","textAlign":"right"}'>{{newsList[0].addtime.split(" ")[0]}}</div>
	    </div>
	    <img :style='{"width":"200px","objectFit":"cover","float":"left","height":"170px"}' :src="baseUrl + newsList[0].picture" >
	  </div>
	  <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" :style='{"padding":"10px","margin":"0 0 20px","flexWrap":"wrap","background":"linear-gradient(45deg, rgba(32,173,158,1) 0%, rgba(93,197,186,1) 15%, rgba(206,242,239,1) 50%, rgba(194,238,234,1) 75%, rgba(32,173,158,1) 100%),#20ad9e","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="list-item animation-box">
	    <img :style='{"objectFit":"cover","width":"200px","height":"170px"}' :src="baseUrl + newsList[1].picture" >
	    <div :style='{"width":"calc(100% - 210px)","padding":"10px","background":"#fff","height":"auto"}'>
	      <div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#333","fontSize":"14px","lineHeight":"28px","textOverflow":"ellipsis","fontWeight":"600"}'>{{newsList[1].title}}</div>
	      <div :style='{"fontSize":"14px","lineHeight":"24px","overflow":"hidden","color":"#666","textIndent":"2em","height":"72px"}'>{{newsList[1].introduction}}</div>
	      <div :style='{"fontSize":"12px","lineHeight":"24px","color":"#999","textAlign":"right"}'>{{newsList[1].addtime.split(" ")[0]}}</div>
	    </div>
	  </div>
	  <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" :style='{"width":"570px","padding":"10px","margin":"0 10px","background":"#f5f5f5","display":"none","height":"auto"}' class="list-item animation-box">
	    <div :style='{"width":"400px","padding":"10px","height":"auto"}'>
	      <div :style='{"color":"#333","fontSize":"14px","lineHeight":"28px"}'>{{newsList[2].title}}</div>
	      <div :style='{"color":"#666","fontSize":"14px","lineHeight":"24px"}'>{{newsList[2].introduction}}</div>
	      <div :style='{"color":"#999","fontSize":"12px","lineHeight":"24px"}'>{{newsList[2].addtime.split(" ")[0]}}</div>
	    </div>
	    <img :style='{"objectFit":"cover","width":"170px","height":"170px"}' :src="baseUrl + newsList[2].picture" >
	  </div>
	  <div @click="toDetail('newsDetail', newsList[3])" v-if="newsList.length>3" :style='{"padding":"10px","margin":"0 0 40px","flexWrap":"wrap","background":"linear-gradient(45deg, rgba(32,173,158,1) 0%, rgba(93,197,186,1) 15%, rgba(206,242,239,1) 50%, rgba(194,238,234,1) 75%, rgba(32,173,158,1) 100%),#20ad9e","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="list-item animation-box">
	    <img :style='{"objectFit":"cover","width":"200px","height":"170px"}' :src="baseUrl + newsList[3].picture" >
	    <div :style='{"width":"calc(100% - 210px)","padding":"10px","background":"#fff","height":"auto"}'>
	      <div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#333","fontSize":"14px","lineHeight":"28px","textOverflow":"ellipsis","fontWeight":"600"}'>{{newsList[3].title}}</div>
	      <div :style='{"fontSize":"14px","lineHeight":"24px","overflow":"hidden","color":"#666","textIndent":"2em","height":"72px"}'>{{newsList[3].introduction}}</div>
	      <div :style='{"fontSize":"12px","lineHeight":"24px","color":"#999","textAlign":"right"}'>{{newsList[3].addtime.split(" ")[0]}}</div>
	    </div>
	  </div>
	</div>
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 12px 0 20px","margin":"0","top":"40px","textAlign":"center","background":"none","display":"inline-block","width":"auto","lineHeight":"40px","position":"absolute","right":"0","height":"40px"}'>
		<span :style='{"color":"#666","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"商品名称",
          },
        ],
        queryIndex: 0,
        tiyuyongpinshangpinmingcheng: '',
        newsList: [],
        tiyuyongpinRecommend: [],

        tiyuyongpinList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.tiyuyongpinshangpinmingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.tiyuyongpinshangpinmingcheng}});
        }
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 2,
                sort: 'addtime',
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "tiyuyongpin/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "tiyuyongpin/autoSort2";
          }
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.tiyuyongpinRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('tiyuyongpin/list', {params: {
				page: 1,
				limit: 8,
			}}).then(res => {
				if (res.data.code == 0) {
					this.tiyuyongpinList = res.data.data.list;
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":5,"speed":500,"spaceBetween":40,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper ('#liststiyuyongpin', options)
					})
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				padding: 40px 20px;
				left: 40px;
				background: #fff;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #20ad9e;
			}
			
			.list3 .swiper-button-next {
				padding: 40px 20px;
				left: auto;
				background: #fff;
				right: 40px;
        }
        
        .list3 .swiper-button-next::after {
				color: #20ad9e;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform:  translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
