import { faRocket, faTruckLoading, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export const MenuLists = [
    {
        id: 1,
        icon: faRocket,
        iconSize: "27px",
        label: 'Dashboard',
        url: '/dashboard',
        content: []
    },
    {
        id: 2,
        icon: faShoppingBasket,
        iconSize: "24px",
        label: 'Order',
        url: '/order',
        content: [
            {
                id: 21,
                icon: faShoppingBasket,
                label: 'Opened',
                url: '/order/opened',
                content: []
            },
            {
                id: 22,
                icon: faShoppingBasket,
                label: 'Closed',
                url: '/order/closed',
                content: [
                    {
                        id: 3,
                        icon: faTruckLoading,
                        iconSize: "21px",
                        label: 'Sub Menu',
                        url: '/order/closed/submenu',
                        content: []
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        icon: faTruckLoading,
        iconSize: "21px",
        label: 'Deliveries',
        url: '/deliveries',
        content: []
    },
    {
        id: 4,
        icon: faShoppingBasket,
        iconSize: "24px",
        label: 'Extra',
        url: '/extra',
        content: [
            {
                id: 41,
                icon: faShoppingBasket,
                label: 'Opened',
                url: '/extra/opened',
                content: []
            }
        ]
    },
];