let homePageStore={
    name:'Home',
    homePageCardsDataArr:[
        {
            cardIcon:'equalizer',
            upperText:'147',
            lowerText:'Posts today',
            class:'1'
        },
        {
            cardIcon:'insert_drive_file',
            upperText:'4',
            lowerText:'Events today',
            class:'2'
        },
        {
            cardIcon:'email',
            upperText:'154',
            lowerText:'Discussions',
            class:'3'
        },
        {
            cardIcon:'spa',
            upperText:'167',
            lowerText:'Total activity',
            class:'4'
        },
    ]
}

export const homePageReducer=(prevState=homePageStore,action)=>{
    return{...prevState}
}

let postsPageStore={
    name:'Posts'
}

export const postsPageReducer=(prevState=postsPageStore,action)=>{
    return{...prevState}
}
let layoutStore={
    sideBarUpperLinks:[
        {
          name:'Dashboard',
          icon:'dashboard',
          link:'/'
        },
        {
          name:'Posts',
          icon:'post_add',
          link:'/posts'
        },
        {
          name:'Events',
          icon:'event_seat',
          link:'/events'
        },
        {
          name:'Loans',
          icon:'credit_score',
          link:'/loans'
        },
        {
          name:'Prepaid Cards',
          icon:'credit_card',
          link:'/prepaid_cards'
        }
    ],
    sideBarLowerLinks:[
        {
            name:'Support',
            icon:'help_center',
            link:'/support'
        },
        {
            name:'FAQs',
            icon:'quiz',
            link:'/FAQs'
        },
        {
            name:'Users',
            icon:'people',
            link:'/users'
        },
        {
            name:'Settings',
            icon:'settings',
            link:'/settings'
        }
      ]
}

export const layoutReducer=(prevState=layoutStore,action)=>{
    return{...prevState}
}

