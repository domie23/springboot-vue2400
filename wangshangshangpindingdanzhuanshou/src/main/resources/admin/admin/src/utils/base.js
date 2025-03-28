const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshangshangpindingdanzhuanshou/",
            name: "wangshangshangpindingdanzhuanshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangshangpindingdanzhuanshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上商品订单转手系统"
        } 
    }
}
export default base
