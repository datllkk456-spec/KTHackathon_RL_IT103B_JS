let currentBookingCode = "";
let isBookingValid = false;
let totalRevenue = 0;
let totalBookings = 0;
let isRunning = true;
let userInputCode;
let choice;
do {
    console.log(`
=====================================================    
        HỆ THỐNG BÁN VÉ RẠP MOONLIGHT CINEMA
=====================================================
1. Nhập và kiểm chuẩn mã đặt vé
2. Tính tiền vé xem phim
3. Thẩm định số seri vé may mắn
0. Thoát chương trình
=====================================================
        `)
    choice = prompt("Vui lòng nhập lựa chọn của bạn(0-3): ");
    switch(choice){
        case "1":
            userInputCode = prompt("Nhập mã phiếu khám bệnh: ");
            userInputCode = userInputCode.trim().toUpperCase();
            if (userInputCode === null){
                console.log("Chưa nhập mã vé ");
                break;
            }

            if(userInputCode.length < 6){
                console.log("Lỗi: Độ dài nhỏ hơn 6 kí tự");
                break;
            }

            if(userInputCode.includes(" ")){
                console.log("Lỗi: chứa khoảng trắng ở giữa");
                break;
            }

            if (!userInputCode.startsWith("CIN-")){
                console.log("Lỗi: Sai tiền tố (CIN-)");
                break;
            }

            isBookingValid = true;
            currentBookingCode = userInputCode;

            console.log("Mã vé hợp lệ:", currentBookingCode);
            console.log("Đã mở khóa chức năng 2 .");
            break;
        
        case "2":
            if(isBookingValid === false){
                console.log("Vui lòng nhập mã vé trước");
                break;
            }

            let ticketCount;
            let pricePerService;
            let ticketInput;
            while(true){
                ticketInput = prompt("Nhập vào số vé: ");
                if (ticketInput === null){
                    console.log("hủy giao dịch");
                    break;
                }

                ticketCount = Number(ticketInput.trim());

                if (ticketInput.trim() !== "" && Number.isInteger(ticketCount) && ticketCount >0){
                    break;
                }
                console.log("Lỗi: Phải là số nguyên và lớn hơn 0");

            }

            if (ticketInput === null){
                break;
            }

            while(true){
                ticketInput = prompt("Nhập vào giá vé(VNĐ): ");
                if(ticketCount === null){
                    console.log("hủy giao dịch");
                    break;
                }

                pricePerService = Number(ticketInput.trim());
                if(ticketInput.trim() !== "" && Number.isInteger(pricePerService) && pricePerService > 0){
                    break;
                }

                console.log("Lỗi: Giá vé phải là số nguyên > 0");
            }

            if(ticketInput === null){
                break;
            }

            let chiPhiCoSo = ticketCount * pricePerService;
            let discount = 0;

            if(ticketCount >= 4){
                discount = Math.round(chiPhiCoSo * 0.1);
            }

            // Phí dịch vụ đặt vé
            let bookTicketFee = Math.round((chiPhiCoSo - discount) * 0.08);
            //Tổng thanh toán 
            let totalPayment = Math.round(chiPhiCoSo - discount) + bookTicketFee;

            // Cập nhật doanh thu ....
            totalRevenue += totalPayment;
            totalBookings++;

            let paidBookingCode = currentBookingCode;

            // Hủy mã phiếu sau khi thanh toán
            currentBookingCode = "";
            isBookingValid = false;
            
            // In hóa đơn
            console.log("=====================================================");
            console.log("                    HÓA ĐƠN                          ");
            console.log("=====================================================");
            console.log("Mã đặt vé:", paidBookingCode);
            console.log("Số vé:", ticketCount);
            console.log("giá mỗi vé:", pricePerService.toLocaleString("vi-VN") + " VNĐ");
            console.log( "Chi phí cơ sở:", chiPhiCoSo.toLocaleString("vi-VN") + " VNĐ");
            console.log("Tiền giảm giá:", discount.toLocaleString("vi-VN") + " VNĐ");
            console.log("Phụ phí dịch vụ đặt vé:", bookTicketFee.toLocaleString("vi-VN") + " VNĐ");
            console.log("Tổng thanh toán:", totalPayment.toLocaleString("vi-VN") + " VNĐ");
            console.log("=====================================================");
    
            break;

       
        case "0":
            console.log("Cảm ơn đã sử dụng dịch vụ!!!")
            isRunning = false;
            break;
            
        default:
            console.log("Lỗi: Vui lòng chọn (0-3)")
            break;
    }
} while(isRunning)