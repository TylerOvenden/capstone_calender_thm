package learn.calendar.domain;

import learn.calendar.data.UserCalendarRolesRepository;
import learn.calendar.models.UserCalendarRoles;
import org.springframework.stereotype.Service;


@Service
public class UserCalendarRoleService {

    private final UserCalendarRolesRepository repository;

    public UserCalendarRoleService(UserCalendarRolesRepository repository) {
        this.repository = repository;
    }

    public UserCalendarRoles findById(int ucrId) {
        return repository.findById(ucrId);
    }





}
