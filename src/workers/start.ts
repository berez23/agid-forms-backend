import { makeQueueClient } from "../utils/queue_client";
import { log } from "../utils/logger";
import { SendmailProcessor } from "./email_processor";
import { LinkVerifierProcessor } from "./link_verifier_processor";
import { NodeEventsDispatcher } from "./node_events_dispatcher";
import { makeRedisClient } from "./redis_client";
import { NODE_EVENTS_CHANNEL_NAME } from "../config";

const queueClient = makeQueueClient();

log.info("** Starts node events dispatcher");
NodeEventsDispatcher(queueClient, makeRedisClient(), NODE_EVENTS_CHANNEL_NAME);

log.info("** Starts sendmail processor");
SendmailProcessor(queueClient);

log.info("** Starts link verifier processor");
LinkVerifierProcessor(queueClient);
