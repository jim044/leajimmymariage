import { Component, OnInit } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  arr!: any[];
  dateSelected: string = '2013';
  distinctDate: any[] = [];
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.arr = [
      {
        status: "Mont Saint-Michel",
        date: "2013",
        icon: PrimeIcons.HEART_FILL,
        image: "https://lh3.googleusercontent.com/pw/AMWts8BmgsdVPa9-fGtWwyGiotQVAVxkGAqYc25tznKKYX2XnnQ8Z4tFc5_B04WG8Z_6KOdOnGp1IMpZ6bakuxp6rcT8eOuSMrLJ93PI9AafC5ujVBTdUV-8yH4zjkuonhu93qGqd8wTX7XgyNNGg-L3f-SJIQ=w1292-h969-s-no"
      },
      {
        status: "Saint-lô",
        date: "2013",
        icon: PrimeIcons.HEART_FILL,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AsA7cL3rpWKhuFyhlfUjr1NR57ZnS7QRKt2YrwfxcX81QIoPmZJaViIiqUm9pESNhd8LileeSbJf52tebAvQa8xqh1ydNRknKugU8xBzFj3Qq1c7Y33BwB_TozNcEQxPUi9VL_hIKtUTAoeJx4TCXBeg=w1220-h969-s-no"
      },
      {
        status: "La Barre-de-Semilly",
        date: "2013",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8D3BcpyONofGDbz077bKHlTZiW8Zk0Z4aeLdMHQ1FvaMIq7z1qx7ylD4lrTBIf0jOQ7ctyI8uK8V0yjCh4CfErKkgYs0zGq8zpH1i-bn-56DiXONViW15-yVVd5gUDd2ZZgZAb-NZr2Cez4yBvCcojtGw=w806-h969-s-no"
      },
      {
        status: "La Barre-de-Semilly",
        date: "2014",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8BdD-jnRzHZdnQNQArXJIXHrK9KXp_qDkir23C9IO-bcM81nolYuQCaN5wX0F6GCxvSFoDIJ3vRYcY-I5degZq3VPoEOsU6CXtIIodoLb43Zzz7etkFQUDjWLU5IzUDBuYjNTmSLKK3k1fQg4OmM7AqiQ=w1250-h937-no?authuser=0"
      }
      ,
      {
        status: "La Barre-de-Semilly",
        date: "2014",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8BJ9M9Jfh6GlyhjcF6ToZ42UOfvhi_RQcK5hi0BChcqAxBIOeTJpI7pjqGWzG7zX2gc5uPAomwXrMqCq_nAhNjgjfBTFviBfew0nLsfhCwqpUHyXeyIBn-u4Odsgp0VFL9q9jO459Hmr4MJiDwcJIbTgQ=w1406-h937-no?authuser=0"
      }
      ,
      {
        status: "Lusanger",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8ABfRwh7ff9E5d6VXuBEHZYyxJ3AaSIgSKRURYZaDfgIPoALvN4mGZ4ItiSb93Ss8yMYssTuxA_9eIP_EMbLqVsbzqHCU_q3hsAY-vSAw-pkSAIrL3O7YIO8AkwY8CDTzihNzAQN9EgDSGhSEieGGdd2w=w1624-h938-no?authuser=0"
      },
      {
        status: "Londres",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8Bu1sq5cg0t_cBozs-ZIaKAWa1ik-0A0FF3povQc_5qbBUjHrNeMyO-9RzKAPqCNRiNb107uSVTczKWZTWdxXsMXxpRZPywNHnQsvQvR4MgzezvYb9XDpUb2u-l2qdCmqsHwYoACyb52fVLZVAS0YaLqg=w1406-h937-no?authuser=0"
      },
      {
        status: "Moraira",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AvF2rQ2UeJqXR9yRkEkwoAqK8BPOCXVri0sZx_d9K0PVvIFV5t48H_bRqaemQkDRDhLKz5YmsJEVbX-2MMPT-MPfGukL77S1rB4UYqNfv-jioLm9eIgW_CrTbCHGdVibowP9GdgHVPFVJ8PnMYZsPm6w=w625-h937-no?authuser=0"
      },
      {
        status: "Moraira",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AsY_I7ht1SPuG7Ta-AHBWLmhOnd2_3P77yvbYoTKsTomJFMEmIdfP3Et49BzS9VhexUpB4YDGVo1-mvhjF03yo7yljIJ9Zm2s7-nK3rg_pX2Fy4cEG0lkaLsh-Wq3AQ8cA7jyjrMejduDhFvaJ1P8Jog=w1406-h937-no?authuser=0"
      },
      {
        status: "La Barre-de-Semilly",
        date: "2016",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8DZWNMS7nEWSwZOwzGPIyisSWwMfGMJKgnatX9FUC0BFbUUXn-BeiY4nof1ogTSlavgkKlwlb2l11VUQQyASqO6vWKagYEwQK0STQLcr7qeMGBrZHVa2IK4vp7Q-HuuHLEF5oCOFGpdD3_IvM1U6bR9tw=w1103-h937-no?authuser=0"
      },
      {
        status: "Lusanger",
        date: "2016",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8BdPTYFpSgWyrlqBNB4OPJewL-YQsXLjBkrLfqL6adDvhGpfrtEit4Ba1je1ZMBuzMSjJlwlQ4wM9jlLsL8lKVo_W8nN0L5Cglm3vpdq8txOGcMAVy3V5hXBbLsugwrWc_JeLBXKLb5um8XtQuM6wRzJA=w1250-h937-no?authuser=0"
      },
      {
        status: "Rennes",
        date: "2016",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8Abivj7Xac676SxPHD0mPZAVWBkclYjCzCyiQccTKNESNIovp2vabuZyo9SS80nEnSwHEk5D3qg8Pvp_AJ9uWTywsOYyjtRCcJFxtBk_v_ad7wf7abkkwjqPG-3FZJ02jOI-DiBgw_RGvyoYHCTaixcCg=w1250-h937-no?authuser=0"
      },
      {
        status: "Lyon",
        date: "2017",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AaGyoA5472TxmIJ8v2Ps0AXMAdLe7iyxGoKYeQfpj5ZOeGR3yhxn2xq-ogXR_tGX18ktv7vnuHpFEA-5xP06cxqObzdSfZjgppN0tO_rk8T9bQi9xxFQEND1x2Zji5tRhGeUR4-z12IX2aqbSegyQWig=w1666-h937-no?authuser=0"
      },
      {
        status: "Saint-Pierre-de-Semilly",
        date: "2017",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8C_Mk2M5CJdm3aC8nmK0Ctky5Tx2wKPwrV1KsWsHSGlsk0S-BHYf1s4SVnRw6fg--PjJ4ko0xC5CVO9KO0XmFtL1-5eBxU__iSAbTpLF_XM5xlfdiiXWi2Y6C6Sv77LTY5WSJg04_5iCg3u2OweOg0vWA=w625-h937-no?authuser=0"
      },
      {
        status: "Digne-les-Bains",
        date: "2018",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AyVRP7dr2-lffuteMG1gcCzkS_DXKLMy6qCiOUpCL9sp0gJkbG3Q7CDCe412QnDhsz3XCbhQHcD-LlJIwIqmE9PVLsPsYdX4NNCFaM0IrnygwywJhK4UKrB47u8krSSKYwvCotnJDUaWS83cHLHqiq8A=w1406-h937-no?authuser=0"
      },
      {
        status: "Trolltunga - Norvège",
        date: "2018",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8AK1trbvgwp29Di-1j1yx8U8zBd8CY2zpt5780zw0i-zkznUr2KzHS0svWrgovkWoaQI5YDH1OmVUK9XNyoBDJAjtBWJHEAjOwJ5ytdTL3iKCspPSVXxyUo_NW6BHnByRQP9EbT0R9VF2izuhWx2Y00Hg=w1406-h937-no?authuser=0"
      },
      {
        status: "Tromsø - Norvège",
        date: "2018",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8C6-ecqpnG0GtwmwqTqizHlCUx0q1rsY1BBatU_-SjNqPdaMTL4H9pDHNeNmeCjhNTd9GOU2LzZ6J4Vnn6TFgCiZBq0CGKB6y9mzStG_YffQZn1WKWFvsQllcG-jKOv1AEtfYC0GhUYIdPbavoJlGl9UQ=w1250-h937-no?authuser=0"
      },
      {
        status: "Pékin - Chine",
        date: "2018",
        icon: PrimeIcons.CAR,
        image: "https://lh3.googleusercontent.com/pw/AMWts8CG5mtGoyb399HbTfru7SkUYjCsEdVrPchQsuNsaf7DxmneJcwCK_uN5Y4Jszxh4dm5bMerDM_eGe4v7t6ZZepfG965wNmAoqMD2z9Bw01fmrD0MYqM3qo3EZFsN-kt3wkcDThUIkB-EOm-NEKKnPFkUQ=w1406-h937-no?authuser=0"
      },
    ];


    
    let arrayDate = this.arr.map(place => place.date);
    this.distinctDate = arrayDate.filter((n, i) => arrayDate.indexOf(n) === i);

  }

  selecteDateTimeline(event: any){
    this.dateSelected = event;
  }

  filteredDate(){

  }

}
