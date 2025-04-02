package com.nirvana.vote.resultms;


import com.nirvana.vote.resultms.dto.ElectionWithCandidateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/result")
public class ResultController {

    @Autowired
    private ResultService resultService;


    @GetMapping("/byElectionId")

    public ResponseEntity<Result> getByElectionId(Long electionId) {
        return  ResponseEntity.ok(resultService.getResultByElectionId(electionId));
    }


    @GetMapping
    public ResponseEntity<List<ElectionWithCandidateDto>>getAllResults(){
      resultService.getResults().forEach(System.out::println);
        return ResponseEntity.ok(resultService.getResults());

    }

    @PostMapping
    public ResponseEntity<String> createResult(@RequestBody Result result){
        return ResponseEntity.ok(resultService.saveResult(result));
    }

    // // Handle preflight requests
    // @RequestMapping(method = RequestMethod.OPTIONS)
    // public ResponseEntity<?> handleOptions() {
    //     return ResponseEntity.ok()
    //             .header("Access-Control-Allow-Origin", "http://localhost:5173")
    //             .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    //             .header("Access-Control-Allow-Headers", "*")
    //             .build();
    // }



}
