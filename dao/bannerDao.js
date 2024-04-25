const bannerModel = require("./model/bannerModel")

module.exports.findBannerDao = async () => {
   return await bannerModel.findAll();
}
module.exports.updateBannerDao = async (bannerArr) => {
    // 删除表的记录
    await bannerModel.destroy({
        truncate: true,
    })
    await bannerModel.bulkCreate(bannerArr);
    return await bannerModel.findAll()
}