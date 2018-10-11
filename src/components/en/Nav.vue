<template>
    <div id="mnav" @click="activeNav" ref="nav">
        <ul>
            <li class="active"><a href="#">ABOUT</a></li>
            <li class=""><a href="#solution">SOLUTION</a></li>
            <li class=""><a href="#faq">FAQ</a></li>
            <li class=""><a href="http://www.cubedex.io/">BLOG</a></li>
            <li class=""><a href="#roadmap">ROADMAP</a></li>
            <li class=""><a href="#team">TEAM</a></li>
            <li class=""><a href="#demo">DEMO</a></li>
        </ul>
        <div class="login-box">
            <a href="#" CLASS="login-btn">LOG IN</a>
            <a href="#" CLASS="signup-btn">SIGN UP</a>
        </div>
        <Lang></Lang>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Lang from "@/components/en/Lang"

    export default {
        name: 'mnav',
        components: {
            Lang
        },
        mounted() {
        },
        methods: {
            activeNav(e) {
                let lis = e.currentTarget.childNodes[0].childNodes;
                let li = e.target.parentElement;

                for (let i = 0; i < lis.length; i++) {
                    lis[i].className=''
                }
                li.className = 'active';
                // console.log(current.childNodes[0].childNodes)
            }
        }
    }
</script>
