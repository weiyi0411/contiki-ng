
all: dis-sender sender-node receiver-node root-node
CONTIKI=../../..

MAKE_ROUTING = MAKE_ROUTING_RPL_CLASSIC
MAKE_MAC = MAKE_MAC_TSCH
MODULES += os/services/simple-energest
MODULES += $(CONTIKI_NG_SERVICES_DIR)/orchestra

include $(CONTIKI)/Makefile.include
