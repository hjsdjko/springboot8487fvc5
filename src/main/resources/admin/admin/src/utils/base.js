const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot8487fvc5/",
            name: "springboot8487fvc5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot8487fvc5/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于springboot的体育购物商城"
        } 
    }
}
export default base
