import reducer,{updateStart,updateSuccess,updateError} from '../userSlice'



// TESTING TO SEE IF THE INITIAL STATE IS EMPTY

test('should return the initial state',() => {
    expect(reducer(undefined,{})).toEqual({
            userInfo:{},
            pending:false,
            error:false,
            isLoggedIn:false,
    });
});

// TESTING TO SEE IF THE UPDATE START TRIGGERS PENDING TO TRUE

test('should update pending to true',() => {
    const previousState = {
        userInfo:{},
        pending:false,
        error:false,
        isLoggedIn:false,
    }
    expect(reducer(previousState,updateStart({
        pending:true,
    }))).toEqual({
        userInfo:{},
        pending:true,
        error:false,
        isLoggedIn:false,
    });
});

// TESTING IF UPDATE SUCCESS TRIGEERS PENDING TO TRUE AND ADDS NEW USER TO THE STORE
