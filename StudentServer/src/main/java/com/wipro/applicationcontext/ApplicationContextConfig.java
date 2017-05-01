package com.wipro.applicationcontext;

import java.util.Properties;


import org.apache.commons.dbcp.BasicDataSource;

import org.hibernate.SessionFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@Configuration
@EnableTransactionManagement
@ComponentScan("com.wipro.*")
public class ApplicationContextConfig {
	
	private Properties getHibernateProperties() {
	    Properties properties = new Properties();
	    properties.put("hibernate.show_sql", "true");
	    properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
	    properties.put("hibernate.hbm2ddl.auto", "update");
	    properties.put("spring.jpa.hibernate.naming-strategy","org.hibernate.cfg.DefaultNamingStrategy");
	   // properties.put("hibernate.cache.region.factory_class","org.hibernate.cache.ehcache.EhCacheRegionFactor");
	   // properties.put("hibernate.cache.use_second_level_cache","true");
	    return properties;
	}
	
	@Bean(name = "dataSource")
	public BasicDataSource getDataSource() {
	    BasicDataSource dataSource = new BasicDataSource();
	
	    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
	   
	    dataSource.setUrl("jdbc:mysql://10.200.204.75:3306/rajesh");  
	  
	    dataSource.setUsername("root");
	    dataSource.setPassword("password");
	    return dataSource;
	}
	
	
	@Bean(name = "sessionFactory")
	public SessionFactory getSessionFactory(BasicDataSource dataSource) {
	 
	    LocalSessionFactoryBuilder sessionBuilder = new LocalSessionFactoryBuilder(dataSource);
	    sessionBuilder.scanPackages("com.wipro.*");
	    sessionBuilder.addProperties(getHibernateProperties());
	    return sessionBuilder.buildSessionFactory();
	}

	@Bean(name = "transactionManager")
	public HibernateTransactionManager getTransactionManager(SessionFactory sessionFactory) {
	    HibernateTransactionManager transactionManager = new HibernateTransactionManager(sessionFactory);
	    return transactionManager;
	}
	
	

	@Bean
	public FilterRegistrationBean corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		//config.addAllowedOrigin("engage.wipro.com");
		//config.addAllowedOrigin("engageqa.wipro.com");
		//config.addAllowedOrigin("localhost");
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		//config.addAllowedMethod("OPTIONS");
		//config.addAllowedMethod("HEAD");
		config.addAllowedMethod("GET");
		config.addAllowedMethod("PUT");
		config.addAllowedMethod("POST");
		//config.addAllowedMethod("DELETE");
		//config.addAllowedMethod("PATCH");
		source.registerCorsConfiguration("/**", config);
		// return new CorsFilter(source);
		final FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		bean.setOrder(0);
		return bean;
	}
	
	

	/*@Bean(name="mapper")
	public ObjectMapper mapper(){
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		mapper.setPropertyNamingStrategy(PropertyNamingStrategy.UPPER_CAMEL_CASE);
		return mapper;
	}*/
	
}

