import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  
  BookDetails = [
    {
      id:1,
      BookName:"Wish I Could Tell You by Durjoy Datta",
      BookDetails:"If you have lost a special one in your life, Wish I Could Tell You is a power-packed story that conveys the message of selfless and pure love and will help you find yourself.",
      BookPrice:149,
      BookImg:"https://th.bing.com/th/id/OIP.Y-Vssr8doT7GgHSBtRLsbgAAAA?pid=ImgDet&w=184&h=282&c=7&dpr=1.25"
    },
    {
      id:2,
      BookName:"To Kill a Mockingbird by Harper Lee",
      BookDetails:"Told through the eyes of a child, 'To Kill a Mockingbird' is primarily an example of Southern Gothic fiction that combines both dark and comedic elements and uses a perfect blend of thrill and fiction to exude a deep message.",
      BookPrice:349,
      BookImg:"https://th.bing.com/th/id/OIP.aTa-kZ0PhtKm8_RkQR0UJwHaJ4?pid=ImgDet&w=213&h=283&c=7&dpr=1.25"
    },
    {
      id:3,
      BookName:"One Arranged Murder by Chetan Bhagat",
      BookDetails:"One Arranged Murder is one of the best thriller mysteries with a good story, interesting plot and unexpected twists.",
      BookPrice:149,
      BookImg:"https://th.bing.com/th/id/OIP.qW0RX_CMBHqVANwE0U-rvwAAAA?pid=ImgDet&w=213&h=288&c=7&dpr=1.25"
    },
    {
      id:4,
      BookName:"Think Like a Monk by Jay Shetty",
      BookDetails:"Want to train your mind to attain inner peace and purpose every day, Think Like a Monk is one of the best books to get your hands on.",
      BookPrice:299,
      BookImg:"https://th.bing.com/th/id/OIP.KAYv4DRQ7CccBMXJPv0HrAAAAA?pid=ImgDet&w=212&h=283&c=7&dpr=1.25"
    },
    {
      id:5,
      BookName:"Wise and Otherwise: A Salute to Life  ",
      BookDetails:"Wise and Otherwise is one of the best books by Sudha Murthy. The book explains how understanding human and human nature is one of the toughest jobs in this world. With an interesting title and content inside, the book shows how things that seem right or good or vice versa can be completely different if explored to the proper depth.",
      BookPrice:199,
      BookImg:"https://th.bing.com/th/id/OIP.bFGxCuQh1KjfHbavGYaTrwHaLR?pid=ImgDet&w=203&h=308&c=7&dpr=1.25"
    },
    {
      id:6,
      BookName:"The Alchemist ",
      BookDetails:"The book shows how we all have our goals and must never give up - no matter how many obstacles come our way. The book was originally written in Portuguese and later translated into English. The book is a perfect pick for beginners, inspiring them to take the risk of following their hearts and realizing their dreams.",
      BookPrice:249,
      BookImg:"https://th.bing.com/th/id/OIP.V6xZbGrESoRr16qpWje5zgAAAA?pid=ImgDet&w=203&h=307&c=7&dpr=1.25"
    },
    {
      id:7,
      BookName:"Ikigai: The Japanese Secret to a Long and Happy Life",
      BookDetails:"While giving a message of devoting time to your passion, the book is a great pick if you want to stop chasing materialistic things and stay focused in your life to attain inner peace and happiness.",
      BookPrice:319,
      BookImg:"https://th.bing.com/th/id/OIP.dxiTXo1D--POGfZNSIQ4vAHaLc?pid=ImgDet&w=201&h=311&c=7&dpr=1.25"
    },
    {
      id:8,
      BookName:"A Man Called Ove",
      BookDetails:"The book is an example of a character study where Ove's interaction with everything, his views towards society and his ironclad rules in life are gradually changed. The story focuses on how love and friendship make Ove - a lonely and grumpy old man loved by all.",
      BookPrice:299,
      BookImg:"https://th.bing.com/th/id/OIP.-SYURqk6TmcoU9uyAFR_gQHaLe?pid=ImgDet&w=201&h=311&c=7&dpr=1.25"
    }
  ]

}
