package dev.jeremymichael.Stats360.controller;

import dev.jeremymichael.Stats360.model.PUBG.GameModeStats;
import dev.jeremymichael.Stats360.service.PUBGService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/PUBG")
public class PUBGController {
    @Autowired
    private PUBGService pubgService;

    @GetMapping("/xbox/player/{username}/stats/lifetime")
    public ResponseEntity<GameModeStats> getXboxPlayerLifetimeStats(@PathVariable String username) {
        return new ResponseEntity<GameModeStats>(pubgService.lifeTimeStats(username, "xbox"), HttpStatus.OK);
    }

    @GetMapping("/steam/player/{username}/stats/lifetime")
    public ResponseEntity<GameModeStats> getSteamPlayerLifetimeStats(@PathVariable String username) {
        return new ResponseEntity<GameModeStats>(pubgService.lifeTimeStats(username, "steam"), HttpStatus.OK);
    }

    @GetMapping("/psn/player/{username}/stats/lifetime")
    public ResponseEntity<GameModeStats> getPsnPlayerLifetimeStats(@PathVariable String username) {
        return new ResponseEntity<GameModeStats>(pubgService.lifeTimeStats(username, "psn"), HttpStatus.OK);
    }
}
