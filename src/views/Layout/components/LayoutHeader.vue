<template>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="app-header-nav">
                <li v-for="item in items" :key="item.id" class="home">
                    <RouterLink to="/">{{ item.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜" />
            </div>
        </div>
    </header>
</template>

<script setup>
import { getCategoryAPI } from '@/apis/testAPI';
import { onMounted, ref } from 'vue';

const items = ref([]);
const getCategory = async () => {
    const res = await getCategoryAPI();
    items.value = res.result;
    console.log(res);
};

onMounted(() => {
    getCategory();
});
</script>

<style scoped lang="scss">
.app-header {
    background: #fff;
    position: sticky;

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;
        a {
            // a标签和RouterLink标签是一样的
            display: block; // div默认是block
            height: 132px;
            width: 100%;
            text-indent: -9999px; // 首行缩进，负值表示不缩进
            background-image: url('@/assets/images/logo.png');
            background-repeat: no-repeat; // 不重复显示
            background-position: center 18px;
            background-size: contain; // 指定了背景图像要在指定的区域内完全显示。如果图像的尺寸超过了这个区域，它会被缩放到适应区域内
        }
    }

    .app-header-nav {
        width: 820px; // 右边的位置全是这些文字的
        display: flex;
        margin-left: 40px;
        position: relative; // 相对定位，即以当前位置为基准进行移位
        z-index: 998; // 当前元素在堆叠顺序中处于较高的位置

        li {
            margin-right: 40px;
            width: 38px;
            text-align: center; // 将文本内容居中对齐

            a {
                font-size: 16px;
                line-height: 32px;
                height: 32px;
                display: inline-block; // 默认情况下,a是内联元素无法设置宽高，所以声明为inline-block

                &:hover {
                    // 在scss语法中，使用&代表他的父级选择器使用 & 可以确保悬停样式仅应用于当前选择器（即 <a> 元素）
                    // 而不是应用于其父级选择器（即 .app-header-nav li）或其他选择器。
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }
        }
    }
    .search {
        width: 170px;
        height: 32px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;

        .icon-search {
            font-size: 18px;
            margin-left: 5px;
        }

        input {
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }
    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: $helpColor;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}
</style>
