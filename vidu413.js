// Define a class.
class Rectangle {
    // Một Constructor có 2 tham số.
    // (Được sử dụng để tạo ra đối tượng)
    // this.width trỏ tới property (thuộc tính) width của lớp.
    constructor (width = 5 , height = 10) {
    this.width = width;
    this.height = height;
    }
    // Phương thức dùng để tính diện tích hình chữ nhật.
    getArea() {
    var area = this.width * this.height
    return area
    }
    }
    // Tạo 1 đối tượng của lớp Rectangle thông qua Constructor.
    var rect = new Rectangle(3, 5);
    console.log("Height "+ rect.height);
    console.log("Width "+ rect.width);
    // Gọi phương thức
    let area = rect.getArea();
    console.log("Area "+ area );