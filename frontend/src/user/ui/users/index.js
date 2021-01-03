import React from "react";
import { UserCard } from "../card";
import Grid from "@material-ui/core/Grid";
import { useUsersController } from "../../controllers/use-users-controller";

export const Users = () => {
  const { users, deleteUser } = useUsersController();
  return (
    <div>
      <Grid
        container
        style={{ padding: 24, display: "flex", justifyContent: "center" }}
      >
        {users.map((user) => (
          <Grid key={user.id} style={{ margin: 15 }}>
            <UserCard
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              password={user.password}
              deleteUser={deleteUser}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
