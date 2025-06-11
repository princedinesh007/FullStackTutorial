import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(public notes:NotesServiceService){}
today=new Date();
  notes_data:any;
  ngOnInit()
  {
    this.getNotesData();
  }

  getNotesData()
  {
    this.notes_data=this.notes.getTodo();
  }
  
  deleteNotesData(item:any)
  {
    this.notes.delete(item);
    this.getNotesData();
    alert("item Delted")
  }

}
