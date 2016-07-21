#include <SoftwareSerial.h>

int ground1 = 2;
int ground2 = 4;

int weightSensor1 = 3;
int weightSensor2 = 5;

SoftwareSerial mySerial(9, 10);

void setup() {
        // put your setup code here, to run once:
        mySerial.begin(9600);
        Serial.begin(9600);
        pinMode(weightSensor1, INPUT);
        pinMode(weightSensor2, INPUT);
        pinMode(ground2, OUTPUT);
        pinMode(ground1, OUTPUT);
        digitalWrite(ground1, LOW);
        digitalWrite(ground2, LOW);
        digitalWrite(weightSensor1, HIGH);
        digitalWrite(weightSensor2, HIGH);
}

void loop() {
        // put your main code here, to run repeatedly:
        int printBoxStats = 0;

        if(mySerial.available()>0)
        {
                while(mySerial.available()>0) {
                        Serial.write(mySerial.read());
                }
                Serial.println("End of RFID");

                int box1 = digitalRead(weightSensor1);
                int box2 = digitalRead(weightSensor2);

                Serial.print("\nBox 1 :");
                Serial.println(box1);
                Serial.print("Box 2 :");
                Serial.println(box2);
        }

        //delay(300);
}
