<template>
    <div id="team">
        <div class="content">
            <div class="title text-center">
                MEET OUR CORE TEAM
            </div>
            <el-rows>
                <el-col :span="6">
                    <el-popover
                        width="300"
                        trigger="hover"
                        placement="top"
                    >
                        <p>Early crypto-investors have a good relationship with multiple EOS BPs. Financial technology research and development experts, 10yrs+ foreign exchange futures trading system and cross-border payment system project development experience, proficient in cryptography and computer graphics algorithms</p>
                        <img slot="reference" src="../../assets/images/team1.png" alt="">

                    </el-popover>
                    <h4>BUAKAw</h4>
                    <h5>Postgraduate of Business Administration <br> South China University of Technology</h5>
                    <span>Founder & Project R&D Leader</span>
                </el-col>
                <el-col :span="6">
                    <el-popover
                            width="300"
                            trigger="hover"
                            placement="top"
                    >
                        <p>Founder of Xiaoyang Yunshang, head of e-commerce saas system. 12 years of IT industry experience, has served as Yixun Technology, Pinco Software, Ericsson Guangzhou Data Business R&D Center, HSBC Software Software Engineer, Project Manager, Chief Architect.</p>
                        <img slot="reference" src="../../assets/images/team4.png" alt="">

                    </el-popover>
                    <h4>NEWWAY</h4>
                    <h5>Master of Computer Science <br>National Defence University PLA China</h5>
                    <span>Architect Of E-Commerce System</span>
                </el-col>
                <el-col :span="6">
                    <el-popover
                            width="300"
                            trigger="hover"
                            placement="top"
                    >
                        <p>Full-stack engineer, intensive reading of the major public chain source code, worked as a Tencent document back-end service developer, deep understanding of distributed back-end services, skilled use of C++ to write EOS smart contracts, AI and blockchain developers</p>
                        <img slot="reference" src="../../assets/images/team3.png" alt="">

                    </el-popover>
                    <h4>SKYHIGH</h4>
                    <h5>Master of Computer Science <br>Sun Yat-Sen University</h5>
                    <span>Blockchain Engineer & Architect Of Side-Chain</span>
                </el-col>
                <el-col :span="6">
                    <el-popover
                            width="300"
                            trigger="hover"
                            placement="top"
                    >
                        <p>Active member of the Bitshares development community, proficient in graphene systems. The most profitable individual Amoy software developers have extensive experience in information capture and analysis, desktop applications, web application development and more.</p>
                        <img slot="reference" src="../../assets/images/team2.png" alt="">

                    </el-popover>
                    <h4>ZCARLOS</h4>
                    <h5>Bachelor of Computer Science<br>Sun Yat-Sen University</h5>
                    <span>Blockchain Engineer & Growth Hacker</span>
                </el-col>
            </el-rows>
            <!--<div class="title text-center investor">-->
                <!--OUR INVESTOR-->
            <!--</div>-->
            <!--<el-rows>-->
                <!--<el-col :span="8">-->
                    <!--<img src="../../assets/images/JIC-CAPITAL.jpg" alt="">-->
                    <!--<h4>JIC CAPITAL</h4>-->
                <!--</el-col>-->
                <!--<el-col :span="8">-->
                    <!--<img src="../../assets/images/UNBOUNDED-CAPITAL.jpg" alt="">-->
                    <!--<h4>UNBOUNDED CAPITAL</h4>-->
                <!--</el-col>-->
                <!--<el-col :span="8">-->
                    <!--<img src="../../assets/images/MIF-CAPITAL.jpg" alt="">-->
                    <!--<h4>MIF CAPITAL</h4>-->
                <!--</el-col>-->
            <!--</el-rows>-->
        </div>
    </div>
</template>
<script>
    export default{
        name:"team",
        data(){
            return{
                show1:false,
                show2:false,
                show3:false,
                show4:false,
            }
        }
    }
</script>
