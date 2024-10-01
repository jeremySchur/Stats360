package dev.jeremymichael.Stats360.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dev.jeremymichael.Stats360.model.BF2.Stats;
import dev.jeremymichael.Stats360.service.BF2Service;

@RestController
@RequestMapping("/BF2")
public class BF2Controller {
    @Autowired
    private BF2Service BF2Service;

    @GetMapping("/stats/{name}/{playerid}")
    public ResponseEntity<Stats> getBF2PlayerStats(@PathVariable String name, @PathVariable String playerid) {
        return new ResponseEntity<Stats>(BF2Service.stats(name, playerid), HttpStatus.OK);
    }

}