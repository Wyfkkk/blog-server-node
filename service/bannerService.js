const { format } = require("morgan");
const { findBannerDao, updateBannerDao } = require("../dao/bannerDao");
const { handleDataPattern, formatResponse } = require("../utils/tool");

module.exports.findBannerService = async () => {
    
    return formatResponse(0, "", handleDataPattern(await findBannerDao()) )
}
module.exports.updateBannerService = async (bannerArr) => {
    const data = await updateBannerDao(bannerArr)
    return formatResponse(0, "", handleDataPattern(data) )
}