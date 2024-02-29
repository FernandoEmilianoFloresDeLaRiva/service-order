import { SendMessageService } from "../../shared/broker/application/services/sendMessage.service";
import { AmqpLibPort } from "../../shared/broker/infraestructure/ports/AmqpLib";
import { CreateOrderService } from "../application/services/createOrder.service";
import { CreateOrderController } from "./controllers/createOrder.controller";

const amqpLibPort = new AmqpLibPort("amqp://54.196.185.0");

const sendMessageService = new SendMessageService(amqpLibPort);

const createOrderService = new CreateOrderService(sendMessageService);

export const createOrderController = new CreateOrderController(
  createOrderService
);
