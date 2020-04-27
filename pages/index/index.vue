<template>
	<view class="page">
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="carousel in carouselList" :key=carousel.id >
				<image :src="carousel.image" class="carousel"></image>
			</swiper-item>
		</swiper>
	<!-- 轮播图 end -->
	
	<!-- 热门超英 start-->
	<view class="page-block super-hot" >
		<view class="hot-title-wapper">
			<image src="../../herotest/static/icos/hot.png" class="hot-ico" mode=""></image>
			<view class="hot-title">
				热门超英
			</view>
			
			
		</view>
		
	</view>
	
	<!-- 热门超英 end-->
	</view>
</template>

<script>
	import common from "../../common/common.js";
	
	export default {
		data() {
			return {
				carouselList: [],
			}
		},
		onLoad() {
			var me = this;
			var serverUrl = me.serverUrl;
				uni.request({
				    url: serverUrl+'/movieCarousel/list', 
					method:"POST",
				    success: res => {
				        console.log(res.data);
						console.log(me.carouselList);
						if (res.data.status == "success") {
							var carouselList = res.data.data;
							me.carouselList = carouselList;
						}
				    }
				});
		},
		methods: {
		
		}
	}
</script>

<style>
	@import url("index.css");
</style>
