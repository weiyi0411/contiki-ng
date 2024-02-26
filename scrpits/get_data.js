load("nashorn:mozilla_compat.js");
importPackage(java.io);

simulation_time = 900000;

TIMEOUT(9000000000, timeout_func()); /*milliseconds*/

fs = new File("sending_results.csv");
tfsending= new FileWriter(fs);

fr = new File("received_results.csv");
tfreceived = new FileWriter(fr);

timeout_func = function simulationEnd() {
    tfsending.close();
    tfreceived.close();
}

while (true) {
    YIELD();
    time_msg = sim.getSimulationTimeMillis();
    time_msg_seconds = time_msg/1000;
    message = msg.split(";");
    
    if (message[0] == "Sending unicast to ") {
        log.log(id + ", " + message[1] + ", " + message[2] + ", " + time_msg + "\n");
        tfsending.write(id + ", " + message[1] + ", " + message[2] + ", " + time_msg + "\n");
    }       
    else if (message[0] == "Data received from ") {
        log.log(id + ", " + message[1] + ", " + message[2] + ", " + time_msg + "\n");
        tfreceived.write(id + ", " + message[1] + ", " + message[2] + ", " + time_msg + "\n");
    } 
}
