package dev.jeremymichael.Stats360.controller;

import dev.jeremymichael.Stats360.model.riot.Champion;
import dev.jeremymichael.Stats360.service.RiotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/riot")
public class RiotController {
    @Autowired
    private RiotService riotService;

    @GetMapping("/stats/{riotId}")
    public ResponseEntity<List<Champion>> getChampions(@PathVariable String riotId) {
        return new ResponseEntity<>(riotService.champions(riotId), HttpStatus.OK);
    }
}
