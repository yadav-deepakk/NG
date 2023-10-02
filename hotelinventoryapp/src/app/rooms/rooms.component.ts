import { Component, OnInit } from '@angular/core';
import { hotelRoomsInfo, hotelRoom } from '../rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelAvailableRooms: number = 30;
  isRoomCountHidden: boolean = false;

  roomsInfo: hotelRoomsInfo | undefined = {
    availbleCount: 30,
    bookedCount: 20,
    totalCount: 50,
  };

  roomsList: hotelRoom[] | undefined = [
    {
      roomNumber: 101,
      roomType: 'Simple',
      photos: ['img1.png'],
      roomPrice: 1200,
      ammenities: 'string value 1',
      checkInTime: new Date("1/11/2023"),
      checkOutTime: new Date("12/11/2023"),
      ratings: 3.550
    },
    {
      roomNumber: 112,
      roomType: 'Simple',
      photos: ['img2.png'],
      roomPrice: 1200,
      ammenities: 'string value 1343',
      checkInTime: new Date("1/11/2023"),
      checkOutTime: new Date("1/12/2023"),
      ratings: 3.951
    },
    {
      roomNumber: 122,
      roomType: 'Medium',
      photos: ['img3.png'],
      roomPrice: 1500,
      ammenities: 'string value 1132',
      checkInTime: new Date("11/11/2023"),
      checkOutTime: new Date("12/11/2023"),
      ratings: 4.0
    },
    {
      roomNumber: 116,
      roomType: 'Large',
      photos: ['img9.png'],
      roomPrice: 2000,
      ammenities: 'string value 641',
      checkInTime: new Date("11/11/2023"),
      checkOutTime: new Date(12 - 11 - 2023),
      ratings: 4.150
    },
  ];

  ngOnInit(): void {
    console.log('Init');
    throw new Error('Method not implemented.');
  }

  toggle(): void {
    this.isRoomCountHidden = !this.isRoomCountHidden;
  }
}
