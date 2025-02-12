package learn.calendar.data.mappers;

import learn.calendar.models.AppUser;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class AppUserMapper implements RowMapper<AppUser> {
    private final List<String> roles;


    public AppUserMapper(List<String> roles) {
        this.roles = roles;
    }

    @Override
    public AppUser mapRow(ResultSet rs, int i) throws SQLException {
        return new AppUser(
                rs.getInt("app_user_id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email"),
                rs.getString("username"),
                rs.getString("password"),
                rs.getBoolean("disabled"),
                roles);
    }
}
