import { Injectable } from '@angular/core';
import { StoreService } from './Service/store.service';
import { design, user } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
constructor(private localstorage: StoreService, private router: Router){}
  loggedin: user = this.localstorage.select('auth');
  checkRestaurant(val: any , fav:design[]): any {

    const check = fav.findIndex(r => {
      if (r.name === val.name) {

        return true


      }
      return false

    })
    if (check == -1) {
      fav.push(val)
      console.log('not found');

    } else {
      console.log('found and removed');

      fav.splice(check, 1)
    }
    return fav
    console.log(check);



    ;





  }
  addtofav(val: design) {



    if (this.loggedin !== null) {



      const users: Array<user> = this.localstorage.select('users');
      for (let i = 0; i < users.length; i++) {
        let current_user = users[i];
        if (current_user.email == this.loggedin.email) {
          if (current_user.favourites.length < 1) {
            current_user.favourites.push(val)
            

            this.localstorage.remove('users')
            this.localstorage.insert('users', users)
            break
          } else {
            console.log('occupied');
            this.checkRestaurant(val, current_user.favourites)


            this.localstorage.remove('users')
            this.localstorage.insert('users', users)
            break
          }
        }

      }


    }


    else {
      console.log('bad');

      this.router.navigate(['/signin']);

    }
  }
}
