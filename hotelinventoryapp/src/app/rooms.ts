export interface hotelRoomsInfo {
  availbleCount: number;
  bookedCount?: number;
  totalCount?: number;
}

export interface hotelRoom {
  roomNumber: number;
  roomType: string;
  photos: string[];
  roomPrice: number;
  ammenities: string;
  checkInTime: Date;
  checkOutTime: Date;
  ratings: number;
}
