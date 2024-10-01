package dev.jeremymichael.Stats360.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.jeremymichael.Stats360.model.Dota.DotaStats;
import dev.jeremymichael.Stats360.service.DotaService;

@RestController
@RequestMapping("/dota")
public class DotaController {
    @Autowired
    private DotaService dotaService;

    @GetMapping("/stats/{steamId}")
    public DotaStats getDotaPlayerStats(@PathVariable String steamId) {
        return dotaService.dotaPlayerStats(steamId);
    }
}
