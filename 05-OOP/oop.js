// Nomor 1

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//  obj.fun1() akan menampikan fun1 dan data bertipe object. didalam object tersebut berisi key, dan valuenya adalah array.
//  ob.fun2() menampilkan fun2 dan object kosong.
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//  hasilnya berbeda.
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//  karena deklarasi pada function fun2 masih kurang tepat.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
  
// nomor 2

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//  Encapsulation adalah suatu paradigma yang membatasi akses ke suatu properti, dan untuk mengaksesnya harus menggunakan suatu function/method.
//  hal ini dilakukan agar data tetap terjaga dan hanya bisa diakses melalui method.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
//  Abstraction adalah suatu paradigma yang menyembunyikan suatu detail proses yang tidak perlu diketahui oleh pengguna.
//  untuk mengatur kompleksitas sistem dengan menyembunyikan detail dari internal sistem dan membuatnya ke dalam beberapa sistem kecil. Sehingga pengguna hanya perlu memberi suatu input untuk mendapatkan output yang diinginkan.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//  Inheritance adalah turunan. diguanakan untuk menurunkan properti dan method yang ada pada kelas sebelumnya.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//  polymorphism adalah kemampuan suatu object untuk memiliki banyak bentuk. digunakan pada parent dan child yang sama namun memiliki karakteristik yang berbeda.

// Nomor 3

class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }

    getBrandName(){
        return this.brand
    }

    setBrandName(newName){
        return this.brand = newName
    }

    printSpecification(){
        return `Ponsel ini memiliki Storage: ${this.storage} gb dan Ram: ${this.ram} gb`
    }

    setSpecification(newStorage, newRam){
        this.storage = newStorage;
        this.ram = newRam;
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

console.log(phone.printSpecification());
phone.setSpecification(32, 2);
console.log(phone.printSpecification());

// Nomor 4
// class Student {
//     constructor(name, gender) {
//       this.name = name;
//       this.gender = gender;
//       this.courseOfferings = [];
//     }
  
//     getIndexFromCourse(course) {
//       const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
//         return courseOffering.course.getSubject() === course.getSubject();
//       });
//       return indexOfCourse;
//     }
    
//     takeNewCourse(course) {
//       const isCourseExist = this.courseOfferings.find((courseOffering) => {
//         return courseOffering.course.getSubject() === course.getSubject();
//       });
  
//       if (this.courseOfferings.length === 0 || !isCourseExist) {
//         this.courseOfferings.push(new CourseOffering(course));
//         course.decreaseQuota();
//       }
//     }
    
//     courseAttendance(course) {
//       const indexOfCourse = this.getIndexFromCourse(course);
//       if (indexOfCourse >= 0) {
//         this.courseOfferings[indexOfCourse].attendance++;
//       }
//     }
  
//     takeATest(course) {
//       const indexOfCourse = this.getIndexFromCourse(course);
//       if (indexOfCourse >= 0) {
//         if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
//           this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
//         } else {
//           console.log("please fill your absent");
//         }
//       }
//     }
//   }
  
//   class CourseOffering {
//     constructor(course) {
//       this.course = course;
//       this.attendance = 0;
//       this.grade = 0;
//     }
//   }
  
//   class Course {
//     constructor(subject, quota, attendance) {
//       this.subject = subject;
//       this.quota = quota;
//       this.attendance = attendance;
//     }
//     getSubject() {
//       return this.subject;
//     }
//     getAttendance() {
//       return this.attendance;
//     }
//     decreaseQuota() {
//       this.quota--;
//     }
//   }
  
  
//   const biology = new Course("biology", 10, 3);
//   const physics = new Course("physics", 10, 2);
  
//   const johnWatson = new Student("john watson", "male");
  
//   johnWatson.takeNewCourse(biology);
//   johnWatson.takeNewCourse(physics);
  
//   johnWatson.courseAttendance(physics);
//   johnWatson.courseAttendance(physics);
//   johnWatson.courseAttendance(biology);
//   johnWatson.courseAttendance(physics);
  
//   console.log(biology.quota);
//   console.log(physics.quota);
  
//   johnWatson.takeATest(biology);
//   johnWatson.takeATest(physics);
  
//   console.log(johnWatson.courseOfferings);