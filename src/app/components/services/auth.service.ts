export class AuthService {

    isAuth = false;
  
    signIn() {
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              resolve(true);
          //  }, 2000
          }, 1000
          );
        }
      );
    }
  
    signOut() {
     // this.isAuth = true;
      this.isAuth = false;
    }
  }