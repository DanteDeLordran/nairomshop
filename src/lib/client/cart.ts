import { browser } from "$app/environment";

type Order = {
    quantity: number;
    totalPrice: string;
    id?: number | undefined;
    userId?: number | null | undefined;
    productId?: number | null | undefined;
}
type Product = {
    name: string;
    description: string;
    price: string;
    id?: number | undefined;
    categoryId?: number | null | undefined;
}

export const addToCart = (product : Product, userId : number) => {
    if (!browser) return;
    const orders = localStorage.getItem('orders');

    if (orders) {
        const items = JSON.parse(orders) as Order[]
        const itemIndex = items.findIndex(c => c.productId == product.id)
        if (itemIndex >= 0) {
            items[itemIndex].quantity += 1
            items[itemIndex].totalPrice = String(items[itemIndex].quantity * Number(product.price))
        }else{
            const order : Order = {
                userId: userId,
                quantity: 1,
                totalPrice: product.price,
                productId: product.id
            }
            items.push(order)
        }
        localStorage.setItem('orders', JSON.stringify(items))
    }else{
        const order : Order = {
            userId: 1,
            quantity: 1,
            totalPrice: product.price,
            productId: product.id
        }
        const items = [order]
        localStorage.setItem('orders', JSON.stringify(items))
    }
}

export const clearCart = () => {
    if (!browser) return;
	localStorage.setItem('orders', JSON.stringify([]));
};

export const removeFromCart = (idx: number) => {
    if (!browser) return;
	const cur = localStorage.getItem('orders');
	if (cur) {
		const items = JSON.parse(cur) as Order[];
		items.splice(idx, 1);
		localStorage.setItem('orders', JSON.stringify(items));
	}else return
};

export const getCart = () => {
    if (!browser) return [];
	const cur = localStorage.getItem('orders');
	if (cur) {
		const items = JSON.parse(cur) as Order[];
		return items;
	}else{
        return [];
    }
	
};

export const isCartEmpty = () => {
    if (!browser) return;
    const items = getCart()
    if (items?.length === 0) {
        return true
    }else return false
}