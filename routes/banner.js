var express = require("express")
const { findBannerService, updateBannerService } = require("../service/bannerService")
var router = express.Router()
// 获取首页标语
router.get("/", async (req, res, next) => {
    res.send(await findBannerService())
})
router.post("/", async (req, res, next) => {
    res.send(await updateBannerService(req.body))
})
module.exports = router