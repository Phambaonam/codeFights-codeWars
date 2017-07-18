/**
 * Created by doremonsun on 7/18/17.
 */
/***
 * ---------------------Bai toan---------------------------
 * Trong 1 cuộc gọi, cuoc phi nhu sau
 * @param min1 - phut dau tien mat min1 xu.
 * @param min2_10 - phut thu 2 --> 10 mat min2_10 xu.
 * @param min11 - phut thu 11 mat min11 xu.
 * @param s -  la tong so tien dang co.
 * @problem: tinh so phut co the goi dc voi so tien tuong ung.
 * tinh theo so phut, khong tinh theo phut giay
 * @returns {number}
 * -----------------------Tinh toan-------------------------
 *  Gia su min1 = 3, min2_10 = 1, min11 = 2 and s = 20.
 *  So phut goi se dc tinh nhu sau:
 *  Phut dau tien mat 3 xu --> con lai 17 xu.
 *  So tien mat tu phut thu 2 -> 10 la: 9 * 1 = 9, --> con lai 8 xu.
 *  Moi phut tiep theo mat 2 xu --> co the goi duoc 8/2 = 4 phut
 *  Tong so phut goi duoc la : 1 + 9 + 4 = 14 phut.
 *  ---------------------Solving problem----------------------
 *  Cac truong hop co the xay ra:
 *  So tien chi goi dc phut dau tien.
 *  So tien chi goi dc khoang thoi gian <= 10 phut.
 *  So tien co the goi dc phut 11+.
 */
function phoneCall(min1, min2_10, min11, s) {

    if(min1 === s) {
        return 1
    } else if(min1 + 9* min2_10 < s) {
        let end = (s - min1 - 9*min2_10)/min11
        return 10 + Math.floor(end)
    } else {
        let end = (s -min1)/min2_10
        return 1 + Math.floor(end)
    }
}

console.log(phoneCall(3, 1, 2, 20));