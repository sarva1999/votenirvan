package com.nirvana.vote.voterms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoterService {

    @Autowired
    private VoterRepo voterRepo;


    public String createVoter(Voter voter){
        voterRepo.save(voter);
        return "Voter Registered Successfully";
    }

    public Optional<Voter> getVoterById(String id){

        return voterRepo.findById(id);
    }
    public List<Voter> getVoterList(){
        return voterRepo.findAll();
    }


    public String deleteVoter(String id) {
        voterRepo.deleteById(id);
        return "Deleted Successfully";
    }

    public String updateVoter(String voterId, Voter voter) {
         Voter v = voterRepo.findById(voterId).get();
         v.setName(voter.getName());
         v.setAddress(voter.getAddress());
         v.setPhoneNo(voter.getPhoneNo());
         voterRepo.save(v);
         return "Updated Successfully";
    }

}
