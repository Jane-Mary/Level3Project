import { Component, Inject, OnInit } from '@angular/core';
import { StoreService } from '../Service/store.service';
import { design, user } from '../user';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
designs: design[] | null = []

  constructor(private localstorage: StoreService, public dialog: MatDialog,){}
  ngOnInit(): void {
   this.designs = this.getdesign()
  }
  loggedin: user = this.localstorage.select('auth');
  getdesign() {
    const users: Array<user> = this.localstorage.select('users');
    for (let i = 0; i < users.length; i++) {
      let current_user = users[i];
      if (current_user.email == this.loggedin.email) {
        return current_user.favourites
      }

    }
    return null
  }
 
  openDialog(val: any) {
    const item = val
    this.dialog.open(Din, { data: item },);
    
  }

  
}

@Component({
  selector: 'din',
  templateUrl: 'din.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class Din {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

}
  
