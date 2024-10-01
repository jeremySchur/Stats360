package dev.jeremymichael.Stats360;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Stats360Application {

	public static void main(String[] args) {
		SpringApplication.run(Stats360Application.class, args);
	}

	@GetMapping("/")
	public ResponseEntity<Boolean> defaultPage() {
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

}
