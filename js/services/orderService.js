import * as ShippingService from './shippingService.js';

export function total(order) {
    const shipping = ShippingService.ShippingService(order);
    return order.basic * ((100 -order.discount)/100) + shipping

}